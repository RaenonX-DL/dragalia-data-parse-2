import {UnitType} from '../../../enums/unitType';
import {AssetText} from '../../unit/text';


export type SimpleUnitInfo = {
  name: AssetText,
  type: UnitType,
  icon: string,
};

export type SimpleUnitInfoMap = Record<string, SimpleUnitInfo>; // Key is the unit ID
