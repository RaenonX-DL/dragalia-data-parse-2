import {Environment} from '../../../process/env';
import {OfficialAsset} from '../base/main';
import {AbilityEntry} from './entry';
import {AbilityOriginal} from './type';


export class AbilityAsset extends OfficialAsset<number, AbilityOriginal, AbilityEntry> {
  constructor(environment: Environment) {
    super({
      environment,
      fileName: 'AbilityData',
      transform: (entry) => new AbilityEntry(entry),
    });
  }

  getAllAbilityOf(abilityId: number): Array<AbilityEntry> {
    const abilityData = [];
    const current = [this.getDataOfId(abilityId)];
    const traversedIds = new Set<number>([abilityId]);

    while (current.length) {
      const data = current.shift();

      if (!data) {
        continue;
      }

      abilityData.push(data);

      const childAbilityIds = data.childAbilityIds;

      current.push(...childAbilityIds.map((abilityId) => this.getDataOfId(abilityId)));
      childAbilityIds.forEach((abilityId) => traversedIds.add(abilityId));
    }

    return abilityData;
  }
}
