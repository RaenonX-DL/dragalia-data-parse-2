import {Environment} from '../../process/env';
import {CustomAssetManager} from './custom';
import {MasterAssetManager} from './master';


export class AssetManager {
  master: MasterAssetManager;
  custom: CustomAssetManager;

  constructor(environment: Environment) {
    this.master = new MasterAssetManager(environment);
    this.custom = new CustomAssetManager(environment);
  }
}
