import {Element} from '../../../types/enums/element';
import {UnitType} from '../../../types/enums/unitType';
import {MasterEntry, OfficialEntry} from '../base/type';


export type UnitOriginal = OfficialEntry<number> & {
  _ElementalType: number,
  _Rarity: number,
  _CvInfo: string,
  _CvInfoEn: string,
  _ReleaseStartDate: string,
  _IsPlayable: boolean,
};

export type UnitAssetEntry<T extends UnitType> = MasterEntry<number> & {
  unitType: T,
  element: Element,
  rarity: number,
  cvLabel: {
    en: string,
    jp: string,
  },
  releaseEpoch: number,
  isPlayable: boolean,
};
