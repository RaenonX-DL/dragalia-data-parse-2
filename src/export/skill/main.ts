import {AttackingSkillInfoCollection} from '../../types/resources/data/skill';
import {exportSkillDataToInfo} from './data';
import {SkillExportOptions} from './type';


export const exportToSkillCollection = async (
  {manager, unitType, unitId}: SkillExportOptions,
): Promise<AttackingSkillInfoCollection> => {
  const skillCollection = await manager.custom.skill.getCollectionOfUnit(unitId);

  return (await Promise.all(skillCollection.map(
    async (data) => await exportSkillDataToInfo({manager, unitType, unitId, data}),
  ))).flat();
};
