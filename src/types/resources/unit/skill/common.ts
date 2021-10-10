import {Condition} from '../../../enums/condition';
import {OfficialSkillInfo} from '../official';
import {AssetText, CustomAssetText} from '../text';
import {BasicUnitInfo} from '../unitInfo';


export type CommonSkillInfo = {
  identifiers: Array<CustomAssetText>,
  internalId: number,
  name: AssetText,
  spMax: number,
  spGradualPctMax: number
} & ({
  sharable: false,
  ssCost: 0,
  ssSp: 0
} | {
  sharable: true,
  ssCost: number,
  ssSp: number
});

export type SkillPossibility<T extends CommonSkillInfo> = {
  condition: Array<Condition>,
  unit: BasicUnitInfo,
  skill: T
};

export type SkillInfoCollection<T extends CommonSkillInfo> = Array<SkillPossibility<T>>;

export type SkillInfoBundle<T extends CommonSkillInfo> = {
  official: Array<OfficialSkillInfo>,
  atkSkills: SkillInfoCollection<T>,
};
