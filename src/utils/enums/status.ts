import {Status} from '../../types/enums/status';


export const isAbnormalStatus = (status: Status): boolean => {
  return status.valueOf() >= 1 && status.valueOf() <= 15;
};
