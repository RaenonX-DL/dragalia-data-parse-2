import {Environment} from '../../../process/env';
import {OfficialAsset} from '../base/main';
import {SkillEntry} from './entry';
import {SkillOriginal} from './type';


export class SkillAsset extends OfficialAsset<number, SkillOriginal, SkillEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'SkillData',
      transform: (entry) => new SkillEntry(entry),
    });
  }
}
