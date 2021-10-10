import * as fs from 'fs';
import * as path from 'path';

import * as yaml from 'js-yaml';

import {Config} from '../types/config';
import {AssetLanguage, AssetLanguageLocale} from '../types/enums/lang';


export class Environment {
  config: Config;

  constructor(configPath: string) {
    this.config = yaml.load(fs.readFileSync(configPath, 'utf-8')) as Config;
  }

  get skillDataDir(): string {
    return path.join(this.config.data.custom, 'skill');
  }

  _getAssetPathParts(fileNameWithExt: string): Array<string> {
    return [
      'assets',
      '_gluonresources',
      'resources',
      'master',
      fileNameWithExt,
    ];
  }

  getLocalizedAssetPath(lang: AssetLanguage, fileNameWithExt: string): string {
    if (lang === 'jp') {
      // Master language doesn't have specific folder
      return path.join(this.config.data.asset, ...this._getAssetPathParts(fileNameWithExt));
    }

    return path.join(
      this.config.data.asset,
      'localized',
      AssetLanguageLocale[lang],
      ...this._getAssetPathParts(fileNameWithExt),
    );
  }
}
