import {AssetLanguage, CustomAssetLanguage} from '../../enums/lang';


export type AssetText = {
  [lang in AssetLanguage]: string
};

export type CustomAssetText = {
  [lang in CustomAssetLanguage]: string
};
