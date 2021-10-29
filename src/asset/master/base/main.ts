import {Environment} from '../../../process/env/base';
import {AssetLanguage} from '../../../types/enums/lang';
import {loadJson} from '../../../utils/load';
import {MasterEntry} from './entry';
import {DataIdType, MasterData, MasterOriginal} from './type';


export type MasterAssetInitOptions<D, T> = {
  environment: Environment,
  fileName: string,
  transform: (entry: D) => T,
  lang?: AssetLanguage,
};

export class MasterAsset<K extends DataIdType, D extends MasterOriginal<K>, T extends MasterEntry<K>> {
  private readonly _data: T[];
  private readonly _lookup: {[id in string]?: T};

  protected constructor({environment, fileName, transform, lang}: MasterAssetInitOptions<D, T>) {
    const data = loadJson<MasterData<K, D>>(
      environment.getLocalizedMasterAssetPath(lang || 'jp', `${fileName}.json`),
    );

    this._data = data.dict.entriesValue.map((entry) => transform(entry));
    this._lookup = Object.fromEntries(this._data.map((entry) => [entry.id, entry]));
  }

  get allIds(): string[] {
    return Object.keys(this._lookup);
  }

  getDataOfId(id: K): T | undefined {
    return this._lookup[id.toString()];
  }

  getDataOfIdThrow(id: K): T {
    const ret = this.getDataOfId(id);

    if (!ret) {
      throw new Error(`${id} not found`);
    }

    return ret;
  }
}
