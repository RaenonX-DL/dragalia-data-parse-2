import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {ActionCondEntry} from './entry';
import {ActionCondOriginal} from './type';


export class ActionCondAsset extends MasterAsset<number, ActionCondOriginal, ActionCondEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'ActionCondition',
      transform: (entry) => new ActionCondEntry(entry),
    });
  }
}
