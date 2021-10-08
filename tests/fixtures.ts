import {Environment} from '../src/process/env';


type Fixture = {
  environment: Environment,
};

export const fixture: Fixture = {
  environment: new Environment('config.yaml'),
};
