import {CancelUnit} from '../../../types/resources/unit/cancel';
import {isNonNil} from '../../../utils/array';
import {ActionData} from './type';
import {isCancelActionComponent, isCommonActionComponent} from './util';


export class Action {
  data: ActionData;

  earliestHitLabelTimings: {[label in string]: number};

  constructor(data: ActionData) {
    this.data = data;

    this.earliestHitLabelTimings = Object.fromEntries(data.Components
      .filter(isCommonActionComponent)
      .map(({_data}) => ({
        timing: _data._seconds,
        labels: [
          _data._hitAttrLabel,
          ..._data._hitAttrLabelSubList || [],
          _data._arrangeBullet?._abHitAttrLabel,
        ].filter<string>(isNonNil()),
      }))
      .flatMap(({timing, labels}) => labels.map((label) => [label, timing])),
    );
  }

  toCancelUnits(): CancelUnit[] {
    return this.data.Components
      .filter(isCancelActionComponent)
      .map(({_data}) => ({
        action: _data._actionId,
        time: _data._seconds,
      }));
  }
}
