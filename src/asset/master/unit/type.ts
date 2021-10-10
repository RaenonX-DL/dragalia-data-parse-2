import {MasterOriginal} from '../base/type';


export type UnitOriginal = MasterOriginal<number> & {
  _Name: string,
  _SecondName: string,
  _Rarity: number,
  _ElementalType: number,
  _BaseId: number,
  _VariationId: number,
  _CvInfo: string,
  _CvInfoEn: string,
  _ReleaseStartDate: string,
  _IsPlayable: boolean,
};
