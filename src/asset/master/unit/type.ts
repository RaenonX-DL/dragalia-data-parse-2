import {MasterOriginal} from '../base/type';


export type UnitOriginal = MasterOriginal<number> & {
  _ElementalType: number,
  _Rarity: number,
  _CvInfo: string,
  _CvInfoEn: string,
  _ReleaseStartDate: string,
  _IsPlayable: boolean,
};
