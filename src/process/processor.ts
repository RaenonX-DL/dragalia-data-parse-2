import {AssetManager} from '../asset/manager';
import {Environment} from './env';


export class AssetProcessor {
  environment: Environment;
  assets: AssetManager;

  constructor(environment: Environment) {
    this.environment = environment;
    this.assets = new AssetManager(environment);
  }

  export(): void {
    console.warn('Nothing exported.');
  }
}
