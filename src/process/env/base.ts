import {Config} from '../../types/config';
import {AssetLanguage} from '../../types/enums/lang';


export abstract class Environment {
  readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  abstract getPathFromParts(...parts: string[]): string;

  abstract getLocalizedMasterAssetPath(lang: AssetLanguage, fileNameWithExt: string): string;

  abstract loadContentAsString(path: string): string;

  private get indexDirParts(): string[] {
    return [
      this.config.data.custom,
      'index',
    ];
  }

  static get resourceRootParts(): string[] {
    return [
      'assets',
      '_gluonresources',
      'resources',
    ];
  }

  static getMasterAssetPathParts(fileNameWithExt: string): string[] {
    return [
      ...Environment.resourceRootParts,
      'master',
      fileNameWithExt,
    ];
  }

  get skillDataIndex(): string {
    return this.getPathFromParts(...this.indexDirParts, 'skill.json');
  }

  get actionDataIndex(): string {
    return this.getPathFromParts(...this.indexDirParts, 'action.json');
  }
}
