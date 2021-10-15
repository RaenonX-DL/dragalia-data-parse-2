import {ActionComponent, ActionComponentActiveCancel, ActionComponentCommon} from './type';


export const isCommonActionComponent = (component: ActionComponent): component is ActionComponentCommon => {
  return component.$Script !== 'ActionPartsActiveCancel';
};

export const isCancelActionComponent = (component: ActionComponent): component is ActionComponentActiveCancel => {
  return component.$Script === 'ActionPartsActiveCancel';
};
