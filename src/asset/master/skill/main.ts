import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {SkillEntry} from './entry';
import {SkillOriginal} from './type';


export class SkillAsset extends MasterAsset<number, SkillOriginal, SkillEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'SkillData',
      transform: (entry) => new SkillEntry(entry),
    });
  }
}
