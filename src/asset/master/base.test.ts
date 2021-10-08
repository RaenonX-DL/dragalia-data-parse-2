import {fixture} from '../../../tests/fixtures';
import {TextAsset} from './text/main';


describe('Base official asset', () => {
  it('reads data', async () => {
    const textAsset = new TextAsset(fixture.environment);

    expect(textAsset.getDataOfId('ABNORMAL_STATUS_NAME_1')?.text).toBe('毒');
  });
});
