import {UnitType} from '../../../../types/enums/unitType';
import {UnitAssetEntry, UnitOriginal} from '../type';


export type CharaOriginal = UnitOriginal & {
  _EditSkillId: number,
  _EditSkillCost: number,
};

export type CharaEntry = UnitAssetEntry<UnitType.CHARACTER> & {
  ssId: number,
  ssCost: number,
};
