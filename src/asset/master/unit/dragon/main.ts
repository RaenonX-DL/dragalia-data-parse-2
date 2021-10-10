import {Environment} from '../../../../process/env';
import {UnitAsset} from '../asset';
import {DragonEntry} from './entry';
import {DragonOriginal} from './type';


export class DragonAsset extends UnitAsset<DragonOriginal, DragonEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'DragonData',
      transform: (entry) => new DragonEntry(entry),
    });
  }
}
