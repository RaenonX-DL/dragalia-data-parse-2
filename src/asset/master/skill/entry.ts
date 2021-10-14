import {AssetManager} from '../../manager/main';
import {MasterEntry} from '../base/entry';
import {SkillOriginal} from './type';


export class SkillEntry extends MasterEntry<number> {
  nameLabel: string;
  sp: number;
  ssSp: number;
  abilityId: number;
  actionIds: number[];

  constructor(entry: SkillOriginal) {
    super(entry);

    this.nameLabel = entry._Name;
    this.sp = entry._SpLv4;
    this.ssSp = entry._SpLv4Edit;
    this.abilityId = entry._Ability4 || entry._Ability3;
    this.actionIds = [entry._ActionId1, entry._ActionId2, entry._ActionId3, entry._ActionId4]
      .filter((actionId) => actionId > 0);
  }

  getSpGradualFillPct(manager: AssetManager): number {
    if (!this.abilityId) {
      // No related ability
      return 0;
    }

    return manager.master.ability.getAllAbilityOf(this.abilityId)
      .map((abilityData) => abilityData.actionConditionIds)
      .flat(1)
      .map((actionConditionId) => manager.master.actionCond.getDataOfIdThrow(actionConditionId)?.regenSpPct)
      .reduce((a, b) => (a || 0) + (b || 0), 0) || 0;
  }
}
