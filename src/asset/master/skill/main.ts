import {Environment} from '../../../process/env';
import {OfficialAsset} from '../base/main';
import {transformSkillEntry} from './transform';
import {SkillEntry, SkillOriginal} from './type';


export class SkillAsset extends OfficialAsset<number, SkillOriginal, SkillEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'SkillData',
      transform: transformSkillEntry,
    });
  }
}
