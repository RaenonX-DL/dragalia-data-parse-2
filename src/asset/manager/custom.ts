import {Environment} from '../../process/env/base';
import {ActionLoader} from '../custom/action/main';
import {SkillLoader} from '../custom/skill/main';


export class CustomAssetManager {
  action: ActionLoader;
  skill: SkillLoader;

  constructor(environment: Environment) {
    this.action = new ActionLoader({indexPath: environment.actionDataIndex});
    this.skill = new SkillLoader({indexPath: environment.skillDataIndex});
  }
}
