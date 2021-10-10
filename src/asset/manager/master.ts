import {Environment} from '../../process/env';
import {UnitType} from '../../types/enums/unitType';
import {AbilityAsset} from '../master/ability/main';
import {SkillAsset} from '../master/skill/main';
import {TextAsset} from '../master/text/main';
import {CharaAsset} from '../master/unit/chara/main';
import {DragonAsset} from '../master/unit/dragon/main';


export class MasterAssetManager {
  ability: AbilityAsset;
  text: TextAsset;
  skill: SkillAsset;

  unitData: {[type in UnitType]: CharaAsset | DragonAsset};

  constructor(environment: Environment) {
    this.ability = new AbilityAsset(environment);
    this.text = new TextAsset(environment);
    this.skill = new SkillAsset(environment);

    this.unitData = {
      [UnitType.CHARACTER]: new CharaAsset(environment),
      [UnitType.DRAGON]: new DragonAsset(environment),
    };
  }
}
