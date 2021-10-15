import {isCondition} from '../../../types/enums/condition';
import {SkillDataCollection} from './type';


export const validateCollection = (collection: SkillDataCollection): void => {
  collection.forEach((data, dataIdx) => (
    data.conditions.forEach((comp, compIdx) => {
      comp.forEach((condition) => {
        if (isCondition(condition)) {
          return;
        }

        throw new Error(
          `Condition: ${condition} in the skill data of ${data.skillDataId} 
          (Data #${dataIdx + 1}, Comp #${compIdx + 1}) is not valid`,
        );
      });
    })
  ));
};
