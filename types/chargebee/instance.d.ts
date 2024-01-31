import { OpenCheckoutOptions } from "./checkout";

export type ChargebeeInstance = {
  /**
   * @param businessEntityId Id of business entity.
   * @returns This function returns a promise.
   */
  setBusinessEntity: (
    businessEntityId: string
  ) => Promise<{ acknowledged: boolean }>;
  /**
   * This function is used to open checkout page.
   * @param options OpenCheckoutOptions
   * @returns void;
   */
  openCheckout: (options: OpenCheckoutOptions) => void;
} & Record<string, any>;
