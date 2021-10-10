import {UnitType} from '../../../../types/enums/unitType';
import {transformUnitEntry} from '../transform';
import {CharaEntry, CharaOriginal} from './type';


export const transformCharaEntry = (entry: CharaOriginal): CharaEntry => ({
  ...transformUnitEntry(UnitType.CHARACTER, entry),
  ssId: entry._EditSkillId,
  ssCost: entry._EditSkillCost,
});
