import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {BuffCountEntry} from './entry';
import {BuffCountOriginal} from './type';


export class BuffCountAsset extends MasterAsset<number, BuffCountOriginal, BuffCountEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'BuffCountData',
      transform: (entry) => new BuffCountEntry(entry),
    });
  }
}
