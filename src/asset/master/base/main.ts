import {Environment} from '../../../process/env/base';
import {AssetLanguage} from '../../../types/enums/lang';
import {toJson} from '../../../utils/load';
import {MasterEntry} from './entry';
import {DataIdType, MasterData, MasterOriginal} from './type';


export type MasterAssetInitOptions<D, T> = {
  environment: Environment,
  fileName: string,
  transform: (entry: D) => T,
  lang?: AssetLanguage,
};

export class MasterAsset<K extends DataIdType, D extends MasterOriginal<K>, T extends MasterEntry<K>> {
  private readonly data: T[];
  private readonly lookup: {[id in string]?: T};

  protected constructor({environment, fileName, transform, lang}: MasterAssetInitOptions<D, T>) {
    const data = toJson<MasterData<K, D>>(
      environment.loadContentAsString(
        environment.getLocalizedMasterAssetPath(lang || 'jp', `${fileName}.json`),
      ),
    );

    this.data = data.dict.entriesValue.map((entry) => transform(entry));
    this.lookup = Object.fromEntries(this.data.map((entry) => [entry.id, entry]));
  }

  get allIds(): string[] {
    return Object.keys(this.lookup);
  }

  getDataOfId(id: K): T | undefined {
    return this.lookup[id.toString()];
  }

  getDataOfIdThrow(id: K): T {
    const ret = this.getDataOfId(id);

    if (!ret) {
      throw new Error(`${id} not found`);
    }

    return ret;
  }
}
