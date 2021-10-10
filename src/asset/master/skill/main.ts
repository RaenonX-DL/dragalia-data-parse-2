import {Environment} from '../../../process/env';
import {MasterAsset} from '../base/main';
import {SkillEntry} from './entry';
import {SkillOriginal} from './type';


export class SkillAsset extends MasterAsset<number, SkillOriginal, SkillEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'SkillData',
      transform: (entry) => new SkillEntry(entry),
    });
  }
}
