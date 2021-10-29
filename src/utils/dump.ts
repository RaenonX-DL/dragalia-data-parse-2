import fs from 'fs';


export const dumpJson = <T, >(obj: T, path: string): void => {
  fs.writeFileSync(path, JSON.stringify(obj));
};
