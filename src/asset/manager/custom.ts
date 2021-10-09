import {Environment} from '../../process/env';
import {SkillLoader} from '../custom/skill/loader';


export class CustomAssetManager {
  skill: SkillLoader;

  constructor(environment: Environment) {
    this.skill = new SkillLoader(environment.skillDataDir);
  }
}
