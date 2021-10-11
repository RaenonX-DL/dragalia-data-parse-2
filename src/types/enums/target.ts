export enum Target {
  SELF = 1,
  SELF_SKILL_FIELD = 2,
  ENEMY = 3,
  TEAM = 6,
  TEAM_LOWEST_HP = 7,
  HIT_OR_GUARDED_RECORD = 8,
  HIT_DEPENDENT_SELF = 15,
}

export enum TargetSimple {
  SELF,
  SELF_SURROUNDING,
  ENEMY,
  FIELD,
  TEAM,
  TEAM_LOWEST_HP,
}

export const TargetToSimple: {[target in Target]: TargetSimple} = {
  [Target.SELF]: TargetSimple.SELF,
  [Target.SELF_SKILL_FIELD]: TargetSimple.SELF_SURROUNDING,
  [Target.ENEMY]: TargetSimple.ENEMY,
  [Target.TEAM]: TargetSimple.TEAM,
  [Target.TEAM_LOWEST_HP]: TargetSimple.TEAM_LOWEST_HP,
  [Target.HIT_OR_GUARDED_RECORD]: TargetSimple.ENEMY,
  [Target.HIT_DEPENDENT_SELF]: TargetSimple.SELF,
};
