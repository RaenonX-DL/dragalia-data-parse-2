import {Environment} from '../../process/env';
import {UnitType} from '../../types/enums/unitType';
import {AbilityAsset} from '../master/ability/main';
import {ActionCondAsset} from '../master/actionCond/main';
import {HitAttrAsset} from '../master/hitAttr/main';
import {SkillAsset} from '../master/skill/main';
import {TextAsset} from '../master/text/main';
import {CharaAsset} from '../master/unit/chara/main';
import {DragonAsset} from '../master/unit/dragon/main';


export class MasterAssetManager {
  ability: AbilityAsset;
  actionCond: ActionCondAsset;
  hitAttr: HitAttrAsset;
  text: TextAsset;
  skill: SkillAsset;

  unitData: {[type in UnitType]: CharaAsset | DragonAsset};

  constructor(environment: Environment) {
    this.ability = new AbilityAsset(environment);
    this.actionCond = new ActionCondAsset(environment);
    this.hitAttr = new HitAttrAsset(environment);
    this.text = new TextAsset(environment);
    this.skill = new SkillAsset(environment);

    this.unitData = {
      [UnitType.CHARACTER]: new CharaAsset(environment),
      [UnitType.DRAGON]: new DragonAsset(environment),
    };
  }
}
