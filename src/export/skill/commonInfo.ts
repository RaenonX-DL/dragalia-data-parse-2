import {CharaEntry} from '../../asset/master/unit/chara/entry';
import {CommonSkillInfo} from '../../types/resources/unit/skill/common';
import {SkillDataExportOptions} from './type';


export const exportToCommonInfo = (
  {manager, unitType, unitId, data}: SkillDataExportOptions,
): CommonSkillInfo => {
  const unitData = manager.master.unitData[unitType].getDataOfIdThrow(unitId);
  const skillData = manager.master.skill.getDataOfIdThrow(data.skillDataId);

  const name = manager.master.text.getAssetText(skillData.nameLabel);

  if (!name) {
    throw new Error(`Skill name of label ${skillData.nameLabel} of skill ${data.skillDataId} not found`);
  }

  const isCharaData = unitData instanceof CharaEntry;
  const isSharable = isCharaData && unitData.ssId === data.skillDataId;

  return {
    identifiers: data.identifier,
    internalId: data.skillDataId,
    name,
    spMax: skillData.sp,
    spGradualPctMax: skillData.getSpGradualFillPct(manager),
    ...(
      isSharable ? {
        sharable: true,
        ssCost: unitData.ssCost,
        ssSp: skillData.ssSp,
      } : {
        sharable: false,
        ssCost: 0,
        ssSp: 0,
      }
    ),
  };
};
