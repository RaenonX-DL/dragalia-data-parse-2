import {Environment} from '../../../process/env';
import {AssetLanguage} from '../../../types/enums/lang';
import {AssetText} from '../../../types/resources/unit/text';
import {LocalizedAsset} from '../base/localized';
import {OfficialAsset} from '../base/main';
import {TextEntry} from './entry';
import {TextOriginal} from './type';


class TextAssetOfLocale extends OfficialAsset<string, TextOriginal, TextEntry> {
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
  constructor(environment: Environment) {
    super({
      constructAsset: (lang) => new TextAssetOfLocale(environment, lang),
    });
  }

  getAssetText(id: string): AssetText {
    return this.getDataOfIdAllLang(
      id,
      (lang, entry) => entry?.text || `${id} (${lang.toUpperCase()})`,
    );
  }
}
