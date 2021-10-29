import fs from 'fs';
import * as path from 'path';

import {AssetLanguage, AssetLanguageLocale} from '../../types/enums/lang';
import {Environment} from './base';


export class LocalEnvironment extends Environment {
  getLocalizedMasterAssetPath(lang: AssetLanguage, fileNameWithExt: string): string {
    if (lang === 'jp') {
      // Master language doesn't have specific folder
      return this.getPathFromParts(
        this.config.data.asset,
        ...LocalEnvironment.getMasterAssetPathParts(fileNameWithExt),
      );
    }

    return this.getPathFromParts(
      this.config.data.asset,
      'localized',
      AssetLanguageLocale[lang],
      ...LocalEnvironment.getMasterAssetPathParts(fileNameWithExt),
    );
  }

  getPathFromParts(...parts: string[]): string {
    return path.join(...parts);
  }

  loadContentAsString(path: string): string {
    return fs.readFileSync(path, 'utf-8');
  }
}
