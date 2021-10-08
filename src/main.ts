import {Environment} from './process/env';
import {AssetProcessor} from './process/processor';


const main = () => {
  const environment = new Environment(process.argv[2]);
  const processor = new AssetProcessor(environment);

  processor.export();
};

(async () => {
  main();
})().catch((e) => {
  console.error(e);
});
