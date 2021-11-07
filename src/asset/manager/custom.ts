import {Environment} from '../../process/env/base';
import {ActionLoader} from '../custom/action/main';


export class CustomAssetManager {
  action: ActionLoader;

  constructor(environment: Environment) {
    this.action = new ActionLoader({indexPath: environment.actionDataIndex, environment});
  }
}
