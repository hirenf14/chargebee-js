import { ChargebeeConfig } from "./config";
import { ChargebeeInstance } from "./instance";

export type Chargebee = {
  init: (config: ChargebeeConfig) => ChargebeeInstance;
  getInstance: () => ChargebeeInstance;
};
