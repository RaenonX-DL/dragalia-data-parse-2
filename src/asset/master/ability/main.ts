import {MasterAsset} from '../base/main';
import {GeneralMasterAssetInitOptions} from '../base/type';
import {AbilityEntry} from './entry';
import {AbilityOriginal} from './type';


export class AbilityAsset extends MasterAsset<number, AbilityOriginal, AbilityEntry> {
  constructor({environment}: GeneralMasterAssetInitOptions) {
    super({
      environment,
      fileName: 'AbilityData',
      transform: (entry) => new AbilityEntry(entry),
    });
  }

  getAllAbilityOf(abilityId: number): AbilityEntry[] {
    const abilityData = [];
    const current = [this.getDataOfIdThrow(abilityId)];
    const traversedIds = new Set<number>([abilityId]);

    while (current.length) {
      const data = current.shift();

      if (!data) {
        continue;
      }

      abilityData.push(data);

      const childAbilityIds = data.childAbilityIds;

      current.push(...childAbilityIds.map((abilityId) => this.getDataOfIdThrow(abilityId)));
      childAbilityIds.forEach((abilityId) => traversedIds.add(abilityId));
    }

    return abilityData;
  }
}
