import {
  Chargebee,
  ChargebeeConfig,
  ChargebeeInstance,
  LoadChargebee,
} from "../types";
import { loadScript } from "./shared";

let cbPromise: Promise<Chargebee | null> | null;
let loadCalled = false;

const getCbPromise: () => Promise<Chargebee | null> = () => {
  if (cbPromise) {
    return cbPromise;
  }

  cbPromise = loadScript().catch((error) => {
    // clear cache on error
    cbPromise = null;
    return Promise.reject(error);
  });
  return cbPromise;
};
 
// Execute our own script injection after a tick to give users time to do their
// own script injection.
Promise.resolve()
  .then(() => getCbPromise())
  .catch((error) => {
    if (!loadCalled) {
      console.warn(error);
    }
  });

export const loadChargebee: LoadChargebee = (config) => {
  loadCalled = true;
  config.site
  // if previous attempts are unsuccessful, will re-load script
  return getCbPromise().then((maybeChargebee) =>
    initChargebee(maybeChargebee, config)
  );
};

export const initChargebee = (
  maybeChargebee: Chargebee | null,
  config: ChargebeeConfig
): ChargebeeInstance | null => {
  if (maybeChargebee === null) {
    return null;
  }

  const cbInstance = maybeChargebee.init(config);
  return cbInstance;
};
