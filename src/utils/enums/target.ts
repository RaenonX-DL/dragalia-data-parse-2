import {Target, TargetSimple} from '../../types/enums/target';


export const TargetToSimple: {[target in Target]: TargetSimple} = {
  [Target.SELF]: TargetSimple.SELF,
  [Target.SELF_SKILL_FIELD]: TargetSimple.SELF_SURROUNDING,
  [Target.ENEMY]: TargetSimple.ENEMY,
  [Target.TEAM]: TargetSimple.TEAM,
  [Target.TEAM_LOWEST_HP]: TargetSimple.TEAM_LOWEST_HP,
  [Target.HIT_OR_GUARDED_RECORD]: TargetSimple.ENEMY,
  [Target.HIT_DEPENDENT_SELF]: TargetSimple.SELF,
};
