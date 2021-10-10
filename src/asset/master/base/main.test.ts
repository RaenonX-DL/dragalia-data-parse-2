import {fixture} from '../../../../tests/fixtures';
import {SkillAsset} from '../skill/main';


describe('Master asset', () => {
  it('gets data', async () => {
    const skillAsset = new SkillAsset(fixture.environment);

    expect(skillAsset.getDataOfId(107505023)?.nameLabel).toBe('SKILL_NAME_107505023');
  });
});
