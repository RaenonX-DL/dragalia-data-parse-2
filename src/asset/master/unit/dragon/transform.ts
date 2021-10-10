import {UnitType} from '../../../../types/enums/unitType';
import {transformUnitEntry} from '../transform';
import {DragonEntry, DragonOriginal} from './type';


export const transformDragonEntry = (entry: DragonOriginal): DragonEntry => ({
  ...transformUnitEntry(UnitType.DRAGON, entry),
});
