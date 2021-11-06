import {AttackingSkillInfoCollection} from '../../types/resources/data/skill';
import {exportBasicUnitInfo} from '../unitInfo/basic';
import {exportToCommonInfo} from './commonInfo';
import {HitDataCollection} from './model/hitDataCollection';
import {SkillDataExportOptions} from './type';


export const exportSkillDataToInfo = async (
  {manager, unitType, unitId, data}: SkillDataExportOptions,
): Promise<AttackingSkillInfoCollection> => {
  const unitBasic = exportBasicUnitInfo({manager, unitType, unitId});
  const common = exportToCommonInfo({manager, unitType, unitId, data});

  return (await new HitDataCollection({manager, data}).toAttackingExclusive())
    .map(({exclusive, condition}) => ({
      condition,
      unit: unitBasic,
      skill: {
        ...common,
        ...exclusive,
      },
    }));
};
