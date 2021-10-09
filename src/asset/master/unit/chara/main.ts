import {Environment} from '../../../../process/env';
import {OfficialAsset} from '../../base';
import {transformCharaEntry} from './transform';
import {CharaEntry, CharaOriginal} from './type';


export class CharaAsset extends OfficialAsset<number, CharaOriginal, CharaEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'CharaData',
      transform: transformCharaEntry,
    });
  }
}
