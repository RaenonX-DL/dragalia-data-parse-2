import {ActionCancelType, SkillCancelAction} from '../../../utils/enums/cancel';
import {DeepPartial} from '../../../utils/type';


export type ActionComponentArrangeBullet = {
  _abHitAttrLabel: string,
};

export type ActionComponentDataBase = {
  _seconds: number
};

export type ActionComponentCommon = {
  $Script: string,
  _data: ActionComponentDataBase & DeepPartial<{
    _hitAttrLabel: string,
    _hitAttrLabelSubList: string[],
    _arrangeBullet: DeepPartial<ActionComponentArrangeBullet>
  }>,
};

export type ActionComponentActiveCancel = {
  $Script: 'ActionPartsActiveCancel',
  _data: ActionComponentDataBase & {
    _actionId: SkillCancelAction,
    _actionType: ActionCancelType,
  }
};

export type ActionComponent = ActionComponentCommon | ActionComponentActiveCancel;

export type ActionData = {
  Name: string,
  Components: ActionComponent[],
};
