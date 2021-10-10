import {Element} from '../../../types/enums/element';
import {MasterEntry, OfficialEntry} from '../base/types';


export type UnitOriginal = OfficialEntry<number> & {
  _ElementalType: number,
  _Rarity: number,
  _CvInfo: string,
  _CvInfoEn: string,
  _ReleaseStartDate: string,
  _IsPlayable: boolean,
};

export type UnitEntry = MasterEntry<number> & {
  element: Element,
  rarity: number,
  cvLabel: {
    en: string,
    jp: string,
  },
  releaseEpoch: number,
  isPlayable: boolean,
};
