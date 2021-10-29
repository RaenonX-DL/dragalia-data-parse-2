import request from 'sync-request';

import {Config} from '../../types/config';
import {AssetLanguage, AssetLanguageLocale} from '../../types/enums/lang';
import {Environment} from './base';


export class RemoteEnvironment extends Environment {
  readonly versionTag: string;

  constructor(config: Config, versionTag: string) {
    super(config);

    this.versionTag = versionTag;
  }

  getLocalizedMasterAssetPath(lang: AssetLanguage, fileNameWithExt: string): string {
    const rootParts = [
      'https://raw.githubusercontent.com/RaenonX-DL/dragalia-data-depot',
      this.versionTag,
    ];

    if (lang === 'jp') {
      // Master language doesn't have specific folder
      return this.getPathFromParts(...rootParts, ...Environment.getMasterAssetPathParts(fileNameWithExt));
    }

    return this.getPathFromParts(
      ...rootParts,
      'localized',
      AssetLanguageLocale[lang],
      ...Environment.getMasterAssetPathParts(fileNameWithExt),
    );
  }

  getPathFromParts(...parts: string[]): string {
    return parts.join('/');
  }

  loadContentAsString(path: string): string {
    return request('GET', path).getBody().toString();
  }
}
