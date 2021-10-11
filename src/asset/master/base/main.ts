import * as fs from 'fs';

import {Environment} from '../../../process/env';
import {AssetLanguage} from '../../../types/enums/lang';
import {MasterEntry} from './entry';
import {DataIdType, MasterData, MasterOriginal} from './type';


export type MasterAssetInitOptions<D, T> = {
  environment: Environment,
  fileName: string,
  transform: (entry: D) => T,
  lang?: AssetLanguage,
};

export class MasterAsset<K extends DataIdType, D extends MasterOriginal<K>, T extends MasterEntry<K>> {
  _data: Array<T>;
  _lookup: {[id in string]?: T};

  protected constructor({environment, fileName, transform, lang}: MasterAssetInitOptions<D, T>) {
    const fileContent = fs.readFileSync(
      environment.getLocalizedAssetPath(lang || 'jp', `${fileName}.json`),
      'utf-8',
    );
    const data = JSON.parse(fileContent) as MasterData<K, D>;

    this._data = data.dict.entriesValue.map((entry) => transform(entry));
    this._lookup = Object.fromEntries(this._data.map((entry) => [entry.id, entry]));
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
