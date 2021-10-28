import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {EnemyParamEntry} from './entry';
import {EnemyParamOriginal} from './type';


export class EnemyParamAsset extends MasterAsset<number, EnemyParamOriginal, EnemyParamEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'EnemyParam',
      transform: (entry) => new EnemyParamEntry(entry),
    });
  }
}
