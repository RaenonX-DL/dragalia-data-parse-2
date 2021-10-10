import {AssetManager} from '../src/asset/manager/main';
import {Environment} from '../src/process/env';


type Fixture = {
  environment: Environment,
  manager: AssetManager
};

const environment: Environment = new Environment('config.yaml');

export const fixture: Fixture = {
  environment,
  manager: new AssetManager(environment),
};
