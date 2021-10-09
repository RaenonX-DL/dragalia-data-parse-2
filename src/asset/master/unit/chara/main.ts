import {Environment} from '../../../../process/env';
import {UnitAsset} from '../asset';
import {transformCharaEntry} from './transform';
import {CharaEntry, CharaOriginal} from './type';


export class CharaAsset extends UnitAsset<CharaOriginal, CharaEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'CharaData',
      transform: transformCharaEntry,
    });
  }
}
