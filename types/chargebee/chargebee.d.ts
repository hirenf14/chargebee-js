import { ChargebeeConfig } from "./config";
import { ChargebeeInstance } from "./instance";

export type Chargebee = {
    /**
     * Initiate Chargebee Instance
     * 
     * @param config ChargebeeConfig
     * @returns ChargebeeInstance
     */
  init: (config: ChargebeeConfig) => ChargebeeInstance;
  /**
   * Get initiated Chargebee Instance.
   * 
   * @returns ChargebeeInstance
   */
  getInstance: () => ChargebeeInstance;
  /**
   * Get instance status, if initiated returns true
   */
  inited: boolean;
};
