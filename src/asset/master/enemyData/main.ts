import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {EnemyDataEntry} from './entry';
import {EnemyDataOriginal} from './type';


export class EnemyDataAsset extends MasterAsset<number, EnemyDataOriginal, EnemyDataEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'EnemyData',
      transform: (entry) => new EnemyDataEntry(entry),
    });
  }
}
