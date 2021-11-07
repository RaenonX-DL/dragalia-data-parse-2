import * as fs from 'fs';
import * as path from 'path';

import {AssetManager} from '../asset/manager/main';
import {Environment} from './env/base';


const BUILD_INFO_PATH = '.buildinfo.json';

export class AssetProcessor {
  environment: Environment;
  assets: AssetManager;

  constructor(environment: Environment) {
    this.environment = environment;
    this.assets = new AssetManager(environment);
  }

  export(): void {
    if (!fs.existsSync(BUILD_INFO_PATH)) {
      throw new Error('Please build first by running either `npm run dev:build` or `npm run prod:build`.');
    }

    console.warn('Nothing exported.');
  }

  async build(): Promise<void> {
    const config = this.environment.config;

    await this.assets.custom.skill.build(path.join(config.data.custom, 'skill'));
    await this.assets.custom.action.build(path.join(config.data.asset, ...Environment.resourceRootParts, 'actions'));

    fs.writeFile(
      BUILD_INFO_PATH,
      JSON.stringify({time: new Date().toISOString()}),
      () => console.log('Done building parser.'),
    );
  }
}
