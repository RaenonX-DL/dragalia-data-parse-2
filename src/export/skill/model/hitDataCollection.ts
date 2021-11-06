import {SkillData} from '../../../asset/custom/skill/type';
import {AssetManager} from '../../../asset/manager/main';
import {ConditionComposite} from '../../../types/enums/condition';
import {EfficacyType} from '../../../types/enums/efficacy';
import {CancelUnit} from '../../../types/resources/unit/cancel';
import {
  AfflictionUnit,
  AttackingSkillInfoExclusive,
  BuffFieldBoost,
  ModsUnit,
  TimingData,
} from '../../../types/resources/unit/skill/atk';
import {isNonNil} from '../../../utils/array';
import {
  CurrentComboCountCondition,
  TargetElementCondition,
  TargetStatusCondition,
} from '../../../utils/enums/condition';
import {combinations, product} from '../../../utils/iter';
import {SkillDataExportOptions} from '../type';
import {HitData} from './hitData';


export class HitDataCollection {
  hits: HitData[];
  skillData: SkillData;
  manager: AssetManager;

  mods: ModsUnit[];
  afflictions: AfflictionUnit[];
  canDispel: boolean;
  buffZoneBoost: BuffFieldBoost;

  constructor({manager, data}: Pick<SkillDataExportOptions, 'manager' | 'data'>) {
    this.hits = data.hitLabels
      .map((label) => manager.master.hitAttr.getDataOfIdThrow(label))
      .map((hitAttr) => new HitData({manager, hitAttr}));
    this.skillData = data;
    this.manager = manager;

    this.mods = this.hits.map((hitData) => ({
      damage: hitData.hitAttr.mod,
      boost: {
        buff: {
          count: hitData.hitAttr.toBuffCountBoost(manager, data.params?.buff?.inEffect || 0),
        },
        enmity: hitData.hitAttr.boost.enmity,
      },
    }));
    this.afflictions = this.hits.map((hitData) => hitData.toAfflictionUnit()).filter(isNonNil());
    this.canDispel = this.hits.some((data) => data.actionCond?.efficacy === EfficacyType.DISPEL);
    this.buffZoneBoost = {self: 0, ally: 0, ...data.params?.buff?.field || {}};
  }

  _conditionElementsSelf(): ConditionComposite[][] {
    const targetElement = [...new Set(
      this.hits
        .map((hitData) => hitData.actionCond)
        .filter(isNonNil())
        .map((actionCond) => TargetElementCondition[actionCond.target])
        .filter(isNonNil())
        .map((condition) => [condition]),
    )];

    return [targetElement];
  }

  _conditionElementsTarget(): ConditionComposite[][] {
    const elements: ConditionComposite[][] = [];

    if (this.hits.some((data) => data.hitAttr.boostInOd)) {
      elements.push([['TARGET_OD_STATE'], []]);
    }

    const afflictionConditions = [
      ...new Set(this.hits.flatMap((data) => data.hitAttr.killer.status)),
    ]
      .map((status) => TargetStatusCondition[status])
      .filter(isNonNil());
    elements.push([...combinations(afflictionConditions), []]);

    const comboKillerConditions = [
      ...new Set(
        this.hits.flatMap(
          (data) => data.hitAttr.killer.rate.combo?.breakpoints
            .map(({key}) => CurrentComboCountCondition[key]),
        )
          .filter(isNonNil()),
      ),
    ];
    elements.push([comboKillerConditions]);

    return elements;
  }

  async toActionData(): Promise<{timing: TimingData, cancel: CancelUnit[]}> {
    const skillData = this.manager.master.skill.getDataOfIdThrow(this.skillData.skillDataId);
    const actionData = await (
      Promise.all(skillData.actionIds.map((actionId) => this.manager.custom.action.getActionData(actionId)))
    );

    actionData.flatMap((action) => action.toCancelUnits().filter(isNonNil()));

    return {
      timing: {
        earliest: Math.min(...actionData.flatMap(
          (actionData) => (
            Object
              .entries(actionData.earliestHitLabelTimings)
              .filter(([label]) => this.skillData.hitLabels.includes(label))
              .map(([_, timing]) => timing)
          ))),
      },
      cancel: [],
    };
  }

  toPossibleConditions(): ConditionComposite[] {
    const elements: ConditionComposite[][] = [
      this.skillData.conditions,
      ...this._conditionElementsSelf(),
      ...this._conditionElementsTarget(),
    ];

    return product(...elements).map((conditionComp) => (
      conditionComp.reduce((prev, curr) => [...prev, ...curr])
    ));
  }

  async toAttackingExclusive(): Promise<{exclusive: AttackingSkillInfoExclusive, condition: ConditionComposite}[]> {
    return Promise.all(this.toPossibleConditions().map(async (conditionComp) => {
      const {cancel: cancelActions, timing} = await this.toActionData();

      return {
        exclusive: {
          mods: this.mods,
          afflictions: this.afflictions,
          boost: {
            buff: {
              field: this.buffZoneBoost,
            },
          },
          dispel: this.canDispel,
          timing,
          cancelActions,
        },
        condition: conditionComp,
      };
    }));
  }
}
