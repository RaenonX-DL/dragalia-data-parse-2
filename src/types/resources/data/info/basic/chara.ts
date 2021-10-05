import {BasicUnitInfo} from '../../../unit/unitInfo';


export type BasicCharaInfo = BasicUnitInfo & {
  weapon: number,
  hasUniqueDragon: boolean,
};

export type BasicCharaInfoCollection = Array<BasicCharaInfo>;
