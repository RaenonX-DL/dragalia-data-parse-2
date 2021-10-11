import {fixture} from '../../../tests/fixtures';
import {UnitType} from '../../types/enums/unitType';
import {exportToCommonInfo} from './commonInfo';


describe('Skill common info', () => {
  it('exports non-sharable skill correctly', async () => {
    const info = exportToCommonInfo({
      manager: fixture.manager,
      unitType: UnitType.CHARACTER,
      unitId: 10550203,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(10550203))[1],
    });

    expect(info.name).toStrictEqual({
      cht: '冰之聖鏡',
      chs: '冰之圣镜',
      en: 'Ice Mirror',
      jp: '氷の聖鏡',
    });
    expect(info.spMax).toBe(4548);
    expect(info.spGradualPctMax).toBe(0);
    expect(info.identifiers).toStrictEqual([{
      cht: 'S2',
      en: 'S2',
      jp: 'S2',
    }]);
    expect(info.internalId).toBe(105502032);
    expect(info.sharable).toBe(false);
    expect(info.ssSp).toBe(0);
    expect(info.ssCost).toBe(0);
  });

  it('exports sharable skill correctly', async () => {
    const info = exportToCommonInfo({
      manager: fixture.manager,
      unitType: UnitType.CHARACTER,
      unitId: 10550203,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(10550203))[0],
    });

    expect(info.name).toStrictEqual({
      cht: '冰結擊破',
      chs: '冰结击破',
      en: 'Frigid Smash',
      jp: '氷結撃破',
    });
    expect(info.spMax).toBe(2738);
    expect(info.spGradualPctMax).toBe(0);
    expect(info.identifiers).toStrictEqual([
      {
        cht: 'S1',
        en: 'S1',
        jp: 'S1',
      },
      {
        cht: '共享',
        en: 'SS',
        jp: 'シェア',
      },
    ]);
    expect(info.internalId).toBe(105502031);
    expect(info.sharable).toBe(true);
    expect(info.ssSp).toBe(8761);
    expect(info.ssCost).toBe(6);
  });

  it('exports gradual fill skills correctly', async () => {
    const info = exportToCommonInfo({
      manager: fixture.manager,
      unitType: UnitType.CHARACTER,
      unitId: 10150403,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(10150403))[1],
    });

    expect(info.name).toStrictEqual({
      cht: '霸主榮冠',
      chs: '荣光之上',
      en: 'Exalted Glory',
      jp: 'オーバー・ザ・グローリー',
    });
    expect(info.spMax).toBe(999999);
    expect(info.spGradualPctMax).toBeCloseTo(3.2);
    expect(info.identifiers).toStrictEqual([{
      cht: 'S2',
      en: 'S2',
      jp: 'S2',
    }]);
    expect(info.internalId).toBe(101504032);
    expect(info.sharable).toBe(false);
    expect(info.ssSp).toBe(0);
    expect(info.ssCost).toBe(0);
  });

  it('exports dragon skill correctly', async () => {
    const info = exportToCommonInfo({
      manager: fixture.manager,
      unitType: UnitType.DRAGON,
      unitId: 20050107,
      data: (await fixture.manager.custom.skill.getCollectionOfUnit(20050107))[0],
    });

    expect(info.name).toStrictEqual({
      cht: '乙女神樂‧花衣之舞',
      chs: '少女神乐·花衣之舞',
      en: 'Deciduous Dance',
      jp: '乙女神楽・花衣の舞',
    });
    expect(info.spMax).toBe(30);
    expect(info.spGradualPctMax).toBe(0);
    expect(info.identifiers).toStrictEqual([{
      cht: '大招',
      en: 'Ultimate',
      jp: 'スキル',
    }]);
    expect(info.internalId).toBe(200501071);
    expect(info.sharable).toBe(false);
    expect(info.ssSp).toBe(0);
    expect(info.ssCost).toBe(0);
  });
});
