import {Environment} from '../../process/env';
import {UnitType} from '../../types/enums/unitType';
import {AbilityAsset} from '../master/ability/main';
import {ActionCondAsset} from '../master/actionCond/main';
import {BuffCountAsset} from '../master/buffCount/main';
import {EnemyDataAsset} from '../master/enemyData/main';
import {EnemyParamAsset} from '../master/enemyParam/main';
import {HitAttrAsset} from '../master/hitAttr/main';
import {SkillAsset} from '../master/skill/main';
import {TextAsset} from '../master/text/main';
import {CharaAsset} from '../master/unit/chara/main';
import {DragonAsset} from '../master/unit/dragon/main';


export class MasterAssetManager {
  readonly ability: AbilityAsset;
  readonly actionCond: ActionCondAsset;
  readonly buffCount: BuffCountAsset;
  readonly hitAttr: HitAttrAsset;
  readonly text: TextAsset;
  readonly skill: SkillAsset;

  readonly enemy: {
    readonly data: EnemyDataAsset,
    readonly param: EnemyParamAsset,
  };

  readonly unitData: {[type in UnitType]: CharaAsset | DragonAsset};

  constructor(environment: Environment) {
    this.ability = new AbilityAsset(environment);
    this.actionCond = new ActionCondAsset(environment);
    this.buffCount = new BuffCountAsset(environment);
    this.hitAttr = new HitAttrAsset(environment);
    this.text = new TextAsset(environment);
    this.skill = new SkillAsset(environment);

    this.enemy = {
      data: new EnemyDataAsset(environment),
      param: new EnemyParamAsset(environment),
    };

    this.unitData = {
      [UnitType.CHARACTER]: new CharaAsset(environment),
      [UnitType.DRAGON]: new DragonAsset(environment),
    };
  }
}
