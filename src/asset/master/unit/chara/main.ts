import {Environment} from '../../../../process/env';
import {UnitAsset} from '../asset';
import {CharaEntry} from './entry';
import {CharaOriginal} from './type';


export class CharaAsset extends UnitAsset<CharaOriginal, CharaEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'CharaData',
      transform: (entry) => new CharaEntry(entry),
    });
  }
}
