import {BasicUnitInfo} from '../../../unit/unitInfo';


export type BasicDragonInfo = BasicUnitInfo & {
  weapon: number,
  hasUniqueDragon: boolean,
};

export type BasicDragonInfoCollection = BasicDragonInfo[];
