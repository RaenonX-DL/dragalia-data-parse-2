/**
 * Skill cancel action ID.
 *
 * Positive value corresponds to an action ID.
 *
 * This can be found in the field `_actionId` of `ActionPartsActiveCancel`.
 */
export enum SkillCancelAction {
  MOTION_ENDS = -1,
  ANY_ACTION = 0,
  ROLL = 6,
  ROLL_2 = 7,
  FORMAL_JOACHIM_S1 = 991060,
}

/**
 * Skill action cancel type.
 *
 * This can be found in the field ``_actionType`` of an ``ActionPartsActiveCancel`` action component.
 *
 * The official definition is located at ``Gluon/ActionPartsActiveCancel.cs``.
 */
export enum ActionCancelType {
  MOTION_ENDS = -2,
  NONE = 0,
  FS = 1,
  AVOID = 2,
  AVOID_FRONT = 3,
  AVOID_BACK = 4,
}
