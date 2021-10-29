import {fixture} from '../../../../tests/fixtures';
import {TextAsset} from '../text/main';


describe('Localized asset', () => {
  it('gets data of a language', async () => {
    const textAsset = new TextAsset({environment: fixture.environment});

    expect(textAsset.getDataOfId('en', 'ABNORMAL_STATUS_NAME_1')?.text).toBe('Poison');
  });

  it('gets data of all languages', async () => {
    const textAsset = new TextAsset({environment: fixture.environment});

    const texts = textAsset
      .getDataOfIdAllLang(
        'ABNORMAL_STATUS_NAME_1',
        (lang, entry) => entry?.text || '',
      );

    expect(texts.cht).toBe('毒');
    expect(texts.chs).toBe('中毒');
    expect(texts.en).toBe('Poison');
    expect(texts.jp).toBe('毒');
  });
});
