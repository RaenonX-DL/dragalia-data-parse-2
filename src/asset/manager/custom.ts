import {Environment} from '../../process/env';
import {ActionLoader} from '../custom/action/main';
import {SkillLoader} from '../custom/skill/loader';


export class CustomAssetManager {
  action: ActionLoader;
  skill: SkillLoader;

  constructor(environment: Environment) {
    this.action = new ActionLoader(environment.actionDataDir);
    this.skill = new SkillLoader(environment.skillDataDir);
  }
}
