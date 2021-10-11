import {AssetManager} from '../../asset/manager/main';
import {UnitType} from '../../types/enums/unitType';


export type SkillExportOptions = {
  manager: AssetManager,
  unitType: UnitType,
  unitId: number,
};
