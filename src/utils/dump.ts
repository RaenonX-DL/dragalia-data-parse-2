import fs from 'fs';
import * as pathLib from 'path';


export const dumpJson = <T, >(obj: T, path: string): void => {
  // Make directory if necessary
  fs.mkdir(
    pathLib.dirname(path),
    {recursive: true},
    (err) => {
      if (err) {
        throw err;
      }
    });

  fs.writeFileSync(path, JSON.stringify(obj));
};
