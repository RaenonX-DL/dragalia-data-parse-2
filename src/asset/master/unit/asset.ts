import {OfficialAsset, OfficialAssetInitOptions} from '../base/main';
import {UnitEntry, UnitOriginal} from './type';


export class UnitAsset<D extends UnitOriginal, T extends UnitEntry> extends OfficialAsset<number, D, T> {
  constructor(options: OfficialAssetInitOptions<D, T>) {
    super(options);
  }
}
