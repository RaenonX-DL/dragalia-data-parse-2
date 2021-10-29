import * as path from 'path';

import {AssetManager} from '../asset/manager/main';
import {Environment} from './env/base';


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

  async build(): Promise<void> {
    const config = this.environment.config;

    await this.assets.custom.skill.build(path.join(config.data.custom, 'skill'));
    await this.assets.custom.action.build(path.join(config.data.asset, ...Environment.resourceRootParts, 'actions'));
  }
}
