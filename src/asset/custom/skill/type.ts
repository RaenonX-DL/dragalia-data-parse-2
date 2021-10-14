import {ConditionComposite} from '../../../types/enums/condition';
import {CustomAssetText} from '../../../types/resources/unit/text';
import {DeepPartial} from '../../../utils/type';


export type SkillDataParams = {
  buff: {
    inEffect: number,
    field: {
      self: number,
      ally: number,
    }
  }
};

export type SkillData = {
  identifier: Array<CustomAssetText>,
  conditions: Array<ConditionComposite>,
  skillDataId: number,
  hitLabels: Array<string>,
  params: DeepPartial<SkillDataParams>
};

export type SkillDataCollection = Array<SkillData>;
