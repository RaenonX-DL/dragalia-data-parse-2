import * as fs from 'fs';
import * as path from 'path';

import * as yaml from 'js-yaml';

import {Config} from '../types/config';


export class Environment {
  config: Config;

  constructor(configPath: string) {
    this.config = yaml.load(fs.readFileSync(configPath, 'utf-8')) as Config;
  }

  getMasterAssetPath(fileNameWithExt: string): string {
    return path.join(this.config.data.asset, 'assets', '_gluonresources', 'resources', 'master', fileNameWithExt);
  }
}
