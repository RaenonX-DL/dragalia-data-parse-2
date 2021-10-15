import fs from 'fs';

import * as yaml from 'js-yaml';


export const loadFileContent = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf-8');
};

export const loadYaml = <T, >(filePath: string): T => {
  return yaml.load(loadFileContent(filePath)) as T;
};

export const loadJson = <T, >(filePath: string): T => {
  return JSON.parse(loadFileContent(filePath)) as T;
};
