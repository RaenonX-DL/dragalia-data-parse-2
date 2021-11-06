import {fixture} from '../../../tests/fixtures';
import {UnitType} from '../../types/enums/unitType';
import {exportToSkillCollection} from './main';


describe('Skill data exporting', () => {
  it('exports Fjorm S1 correctly', async () => {
    const collection = await exportToSkillCollection({
      manager: fixture.manager,
      unitType: UnitType.CHARACTER,
      unitId: 10550203,
    });

    console.log(collection);
  });
});
