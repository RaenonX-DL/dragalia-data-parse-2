import {AssetManager} from '../../asset/manager/main';
import {UnitType} from '../../types/enums/unitType';
import {BasicUnitInfo} from '../../types/resources/unit/unitInfo';


export const exportBasicInfo = (manager: AssetManager, type: UnitType, unitId: number): BasicUnitInfo => {
  const unitInfo = manager.master.unitData[type].getDataOfId(unitId);

  if (!unitInfo) {
    throw new Error(`Unit info of #${unitId} not found`);
  }

  return {
    type,
    name: unitInfo.getName(manager),
    iconName: unitInfo.iconName,
    id: unitInfo.id,
    element: unitInfo.element,
    rarity: unitInfo.rarity,
    cvEn: manager.master.text.getAssetText(unitInfo.cvLabel.en),
    cvJp: manager.master.text.getAssetText(unitInfo.cvLabel.jp),
    releaseEpoch: unitInfo.releaseEpoch,
  };
};
