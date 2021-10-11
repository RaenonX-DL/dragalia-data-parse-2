import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {HitAttrEntry} from './entry';
import {HitAttrOriginal} from './type';


export class HitAttrAsset extends MasterAsset<string, HitAttrOriginal, HitAttrEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'PlayerActionHitAttribute',
      transform: (entry) => new HitAttrEntry(entry),
    });
  }
}
