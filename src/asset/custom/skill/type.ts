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
  identifier: CustomAssetText[],
  conditions: ConditionComposite[],
  skillDataId: number,
  hitLabels: string[],
  params?: DeepPartial<SkillDataParams>
};

export type SkillDataCollection = SkillData[];
