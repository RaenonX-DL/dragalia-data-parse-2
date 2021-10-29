import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {BuffCountEntry} from './entry';
import {BuffCountOriginal} from './type';


export class BuffCountAsset extends MasterAsset<number, BuffCountOriginal, BuffCountEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'BuffCountData',
      transform: (entry) => new BuffCountEntry(entry),
    });
  }
}
