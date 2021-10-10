import {Element} from '../../enums/element';
import {UnitType} from '../../enums/unitType';
import {AssetText} from './text';


export type BasicUnitInfo = {
  type: UnitType,
  name: AssetText,
  iconName: string,
  id: number,
  element: Element,
  rarity: number,
  cvEn: AssetText,
  cvJp: AssetText,
  releaseEpoch: number,
};
