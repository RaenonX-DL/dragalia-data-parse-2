import {Environment} from '../../../process/env';
import {OfficialAsset} from '../base/main';
import {transformTextEntry} from './transform';
import {TextEntry, TextOriginal} from './type';


export class TextAsset extends OfficialAsset<string, TextOriginal, TextEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'TextLabel',
      transform: transformTextEntry,
    });
  }
}
