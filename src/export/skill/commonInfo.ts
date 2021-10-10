import {SkillData} from '../../asset/custom/skill/type';
import {AssetManager} from '../../asset/manager/main';
import {CharaEntry} from '../../asset/master/unit/chara/entry';
import {UnitType} from '../../types/enums/unitType';
import {CommonSkillInfo} from '../../types/resources/unit/skill/common';
import {BasicUnitInfo} from '../../types/resources/unit/unitInfo';


type CommonSkillInfoExportOptions = {
  manager: AssetManager,
  unitType: UnitType,
  data: SkillData,
  unitBasic: BasicUnitInfo,
};

export const exportToCommonInfo = (
  {manager, unitType, data, unitBasic}: CommonSkillInfoExportOptions,
): CommonSkillInfo => {
  const unitData = manager.master.unitData[unitType].getDataOfId(unitBasic.id);
  const skillData = manager.master.skill.getDataOfId(data.skillDataId);

  if (!unitData) {
    throw new Error(`Unit data of ID ${unitBasic.id} not found`);
  }

  if (!skillData) {
    throw new Error(`Skill data of ID ${data.skillDataId} not found`);
  }

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
