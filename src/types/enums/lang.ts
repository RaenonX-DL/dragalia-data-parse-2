export type AssetLanguage = 'cht' | 'chs' | 'en' | 'jp';

export const AssetLanguageLocale: {[lang in AssetLanguage]: string} = {
  cht: 'tw',
  chs: 'cn',
  en: 'en',
  jp: 'jp',
};

export type CustomAssetLanguage = 'cht' | 'en' | 'jp';

export const AssetLangToCustom: {[lang in AssetLanguage]: CustomAssetLanguage} = {
  cht: 'cht',
  chs: 'cht',
  en: 'en',
  jp: 'jp',
};
