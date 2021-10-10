import * as fs from 'fs';

import {Environment} from '../../../process/env';
import {AssetLanguage} from '../../../types/enums/lang';
import {DataIdType, MasterEntry, OfficialData, OfficialEntry} from './types';


export type OfficialAssetInitOptions<D, T> = {
  environment: Environment,
  fileName: string,
  transform: (entry: D) => T,
  lang?: AssetLanguage,
};

export class OfficialAsset<K extends DataIdType, D extends OfficialEntry<K>, T extends MasterEntry<K>> {
  data: Array<T>;
  lookup: {[id in string]?: T};

  protected constructor({environment, fileName, transform, lang}: OfficialAssetInitOptions<D, T>) {
    const fileContent = fs.readFileSync(
      environment.getLocalizedAssetPath(lang || 'jp', `${fileName}.json`),
      'utf-8',
    );
    const data = JSON.parse(fileContent) as OfficialData<K, D>;

    this.data = data.dict.entriesValue.map((entry) => transform(entry));
    this.lookup = Object.fromEntries(this.data.map((entry) => [entry.id, entry]));
  }

  getDataOfId(id: K): T | undefined {
    return this.lookup[id.toString()];
  }
}
