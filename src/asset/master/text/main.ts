import {Environment} from '../../../process/env/base';
import {AssetLanguage} from '../../../types/enums/lang';
import {AssetText} from '../../../types/resources/unit/text';
import {LocalizedAsset} from '../base/localized';
import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {TextEntry} from './entry';
import {TextOriginal} from './type';


class TextAssetOfLocale extends MasterAsset<string, TextOriginal, TextEntry> {
  constructor(environment: Environment, lang: AssetLanguage) {
    super({
      environment,
      fileName: 'TextLabel',
      transform: (entry) => new TextEntry(entry),
      lang,
    });
  }
}


export class TextAsset extends LocalizedAsset<string, TextOriginal, TextEntry, TextAssetOfLocale> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      constructAsset: (lang) => new TextAssetOfLocale(environment, lang),
    });
  }

  getAssetText(id: string): AssetText {
    return this.getDataOfIdAllLang(
      id,
      (lang, entry) => {
        const text = entry?.text;

        if (!text) {
          throw new Error(`Text for ${id} in ${lang} does not exist`);
        }

        return text;
      },
    );
  }
}
