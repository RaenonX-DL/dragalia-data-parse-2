import {Condition} from '../../../types/enums/condition';
import {CustomAssetText} from '../../../types/resources/unit/text';


export type SkillData = {
  identifier: Array<CustomAssetText>,
  conditions: Array<Array<Condition>>,
  skillDataId: number,
  hitLabels: Array<string>,
};

export type SkillDataCollection = Array<SkillData>;
