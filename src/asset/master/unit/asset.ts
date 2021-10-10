import {OfficialAsset, OfficialAssetInitOptions} from '../base/main';
import {UnitEntry} from './entry';
import {UnitOriginal} from './type';


export class UnitAsset<D extends UnitOriginal, E extends UnitEntry> extends OfficialAsset<number, D, E> {
  constructor(options: OfficialAssetInitOptions<D, E>) {
    super(options);
  }
}
