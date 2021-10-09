import {SkillLoader} from './loader';


describe('Skill loader', () => {
  it('loads skill data of an unit', async () => {
    const loader = new SkillLoader('./data');
    const summerChelleId = 10750404;

    const collection = await loader.getCollectionOfUnit(summerChelleId);

    expect(collection).toHaveLength(2);
    expect(collection.map((entry) => entry.skillDataId)).toStrictEqual([107504041, 107504043]);
  });
});
