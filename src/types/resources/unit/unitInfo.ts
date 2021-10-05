import {UnitType} from '../../enums/unitType';
import {AssetText} from './text';


export type BasicUnitInfo = {
  type: UnitType,
  name: AssetText,
  iconName: string,
  id: number,
  element: number,
  rarity: number,
  cvEn: AssetText,
  cvJp: AssetText,
  releaseEpoch: number,
};
