import {parseCurveObject} from './curve';


describe('Curve string parser', () => {
  it('parses', async () => {
    parseCurveObject('0_10/15_20/30_30/50_50');
  });

  it('parses empty string to null', async () => {
    expect(parseCurveObject('')).toBeNull();
  });

  it('gets correct value from object', async () => {
    const obj = parseCurveObject('0_10/15_20/30_30/50_50');

    expect(obj?.getValueAtKey(10)).toBe(10);
    expect(obj?.getValueAtKey(20)).toBe(20);
    expect(obj?.getValueAtKey(40)).toBe(30);
    expect(obj?.getValueAtKey(80)).toBe(50);
  });
});
