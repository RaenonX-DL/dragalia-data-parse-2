import {ConditionComposite} from '../../../types/enums/condition';
import {CustomAssetText} from '../../../types/resources/unit/text';


export type SkillData = {
  identifier: Array<CustomAssetText>,
  conditions: Array<ConditionComposite>,
  skillDataId: number,
  hitLabels: Array<string>,
  params: {
    buffBoostInEffect?: number
  }
};

export type SkillDataCollection = Array<SkillData>;
