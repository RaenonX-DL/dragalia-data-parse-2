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

  get actionDataDir(): string {
    return path.join(this.config.data.asset, ...this._resourceRootParts, 'actions');
  }

  get _resourceRootParts(): Array<string> {
    return [
      'assets',
      '_gluonresources',
      'resources',
    ];
  }

  _getMasterAssetPathParts(fileNameWithExt: string): Array<string> {
    return [
      ...this._resourceRootParts,
      'master',
      fileNameWithExt,
    ];
  }

  getLocalizedAssetPath(lang: AssetLanguage, fileNameWithExt: string): string {
    if (lang === 'jp') {
      // Master language doesn't have specific folder
      return path.join(this.config.data.asset, ...this._getMasterAssetPathParts(fileNameWithExt));
    }

    return path.join(
      this.config.data.asset,
      'localized',
      AssetLanguageLocale[lang],
      ...this._getMasterAssetPathParts(fileNameWithExt),
    );
  }
}
