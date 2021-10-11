type CurveBreakpoint = {key: number, value: number};

export class CurveObject {
  breakpoints: Array<CurveBreakpoint>;

  constructor(breakpoints: Array<CurveBreakpoint>) {
    this.breakpoints = breakpoints.sort((a, b) => b.key - a.key);
  }

  getValueAtKey(key: number): number {
    return (
      this.breakpoints.find((breakpoint) => key >= breakpoint.key) ||
      this.breakpoints[this.breakpoints.length - 1]
    ).value;
  }
}

export const parseCurveObject = (curveStr: string): CurveObject | null => {
  if (!curveStr) {
    return null;
  }

  return new CurveObject(
    curveStr
      .split('/')
      .map((entry) => entry.split('_', 2))
      .map(([key, value]) => ({key: +key, value: +value})),
  );
};
