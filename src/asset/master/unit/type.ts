import {OfficialEntry} from '../base/type';


export type UnitOriginal = OfficialEntry<number> & {
  _ElementalType: number,
  _Rarity: number,
  _CvInfo: string,
  _CvInfoEn: string,
  _ReleaseStartDate: string,
  _IsPlayable: boolean,
};
