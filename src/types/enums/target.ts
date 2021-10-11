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

