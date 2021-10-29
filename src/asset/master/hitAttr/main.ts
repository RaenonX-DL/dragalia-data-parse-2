import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {HitAttrEntry} from './entry';
import {HitAttrOriginal} from './type';


export class HitAttrAsset extends MasterAsset<string, HitAttrOriginal, HitAttrEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'PlayerActionHitAttribute',
      transform: (entry) => new HitAttrEntry(entry),
    });
  }
}
