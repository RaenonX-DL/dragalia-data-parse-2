import {fixture} from '../../../../tests/fixtures';
import {TextAsset} from '../text/main';


describe('Localized asset', () => {
  it('gets data', async () => {
    const textAsset = new TextAsset(fixture.environment);

    expect(textAsset.getDataOfId('en', 'ABNORMAL_STATUS_NAME_1')?.text).toBe('Poison');
  });
});
