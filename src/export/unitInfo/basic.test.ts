import {fixture} from '../../../tests/fixtures';
import {Element} from '../../types/enums/element';
import {UnitType} from '../../types/enums/unitType';
import {exportBasicInfo} from './basic';


describe('Export basic info', () => {
  it('exports basic info of a unit', async () => {
    const info = exportBasicInfo(fixture.manager, UnitType.CHARACTER, 10750404);

    expect(info.id).toBe(10750404);
    expect(info.type).toBe(UnitType.CHARACTER);
    expect(info.element).toBe(Element.LIGHT);
    expect(info.name).toStrictEqual({
      cht: '謝斯（夏日Ver.）',
      chs: '谢斯（夏日Ver.）',
      en: 'Summer Chelle',
      jp: 'シェス（サマーVer.）',
    });
    expect(info.iconName).toBe('100015_08_r05');
    expect(info.rarity).toBe(5);
    expect(info.cvEn).toStrictEqual({
      cht: 'Jacki Gunn',
      chs: 'Jacki Gunn',
      en: 'Jacki Gunn',
      jp: 'Jacki Gunn',
    });
    expect(info.cvJp).toStrictEqual({
      cht: '大西沙織',
      chs: '大西沙织',
      en: 'Saori Onishi',
      jp: '大西沙織',
    });
    expect(info.releaseEpoch).toBe(1628056800);
  });

  it('throws error if the unit type mismatches', async () => {
    expect(() => {
      exportBasicInfo(fixture.manager, UnitType.DRAGON, 10750404);
    }).toThrow(Error);
  });

  it('throws error if the unit does not exist', async () => {
    expect(() => {
      exportBasicInfo(fixture.manager, UnitType.CHARACTER, 10750487);
    }).toThrow(Error);
  });
});
