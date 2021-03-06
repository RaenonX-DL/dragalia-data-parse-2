import {AssetLanguage} from '../../../types/enums/lang';
import {MasterEntry} from './entry';
import {MasterAsset} from './main';
import {DataIdType, MasterOriginal} from './type';


export type LocalizedAssetInitOptions<
  K extends DataIdType,
  D extends MasterOriginal<K>,
  T extends MasterEntry<K>,
  A extends MasterAsset<K, D, T>,
> = {
  constructAsset: (lang: AssetLanguage) => A,
};

export class LocalizedAsset<
  K extends DataIdType,
  D extends MasterOriginal<K>,
  T extends MasterEntry<K>,
  A extends MasterAsset<K, D, T>,
> {
  asset: {[lang in AssetLanguage]: A};

  protected constructor({constructAsset}: LocalizedAssetInitOptions<K, D, T, A>) {
    this.asset = {
      cht: constructAsset('cht'),
      chs: constructAsset('chs'),
      en: constructAsset('en'),
      jp: constructAsset('jp'),
    };
  }

  getDataOfId(lang: AssetLanguage, id: K): T | undefined {
    return this.asset[lang].getDataOfId(id);
  }

  getDataOfIdAllLang<R>(id: K, getContent: (lang: string, entry: T | undefined) => R): {[lang in AssetLanguage]: R} {
    return {
      cht: getContent('cht', this.getDataOfId('cht', id)),
      chs: getContent('chs', this.getDataOfId('chs', id)),
      en: getContent('en', this.getDataOfId('en', id)),
      jp: getContent('jp', this.getDataOfId('jp', id)),
    };
  }
}
