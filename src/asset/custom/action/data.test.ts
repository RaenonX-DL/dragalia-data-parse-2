import {Action} from './data';
import {ActionData} from './type';


describe('Action data', () => {
  it('returns correct earliest hit label timing', async () => {
    const data: ActionData = {
      Name: 'Action',
      Components: [
        {
          $Script: 'A',
          _data: {
            _seconds: 1,
            _hitAttrLabel: 'A',
          },
        },
        {
          $Script: 'B',
          _data: {
            _seconds: 2,
            _hitAttrLabelSubList: ['B', 'C'],
          },
        },
        {
          $Script: 'C',
          _data: {
            _seconds: 3,
            _arrangeBullet: {
              _abHitAttrLabel: 'D',
            },
          },
        },
      ],
    };

    const action = new Action(data);
    const timing = action.earliestHitLabelTimings;

    expect(timing['A']).toBe(1);
    expect(timing['B']).toBe(2);
    expect(timing['C']).toBe(2);
    expect(timing['D']).toBe(3);
  });
});
