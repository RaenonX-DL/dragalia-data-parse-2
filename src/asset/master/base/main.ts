import * as fs from 'fs';

import {Environment} from '../../../process/env';
import {AssetLanguage} from '../../../types/enums/lang';
import {MasterEntry} from './entry';
import {DataIdType, OfficialData, OfficialEntry} from './type';


export type OfficialAssetInitOptions<D, T> = {
  environment: Environment,
  fileName: string,
  transform: (entry: D) => T,
  lang?: AssetLanguage,
};

export class OfficialAsset<K extends DataIdType, D extends OfficialEntry<K>, T extends MasterEntry<K>> {
  _data: Array<T>;
  _lookup: {[id in string]?: T};

  protected constructor({environment, fileName, transform, lang}: OfficialAssetInitOptions<D, T>) {
    const fileContent = fs.readFileSync(
      environment.getLocalizedAssetPath(lang || 'jp', `${fileName}.json`),
      'utf-8',
    );
    const data = JSON.parse(fileContent) as OfficialData<K, D>;

    this._data = data.dict.entriesValue.map((entry) => transform(entry));
    this._lookup = Object.fromEntries(this._data.map((entry) => [entry.id, entry]));
  }

  getDataOfId(id: K): T | undefined {
    return this._lookup[id.toString()];
  }
}
