import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {ActionCondEntry} from './entry';
import {ActionCondOriginal} from './type';


export class ActionCondAsset extends MasterAsset<number, ActionCondOriginal, ActionCondEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'ActionCondition',
      transform: (entry) => new ActionCondEntry(entry),
    });
  }
}
