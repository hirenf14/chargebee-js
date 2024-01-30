export type Chargebee = {
  init: (config: ChargebeeConfig) => ChargebeeInstance;
  getInstance: () => ChargebeeInstance;
};

export const loadChargebee: LoadChargebee;

export type ChargebeeInstance = any;

/**
 * Chargebee init config
 *
 * @docs https://www.chargebee.com/checkout-portal-docs/cb-library-api-ref.html#init
 */
export type ChargebeeConfig = {
  /**
   * Your site name.
   * `site` is required.
   */
  site: string;
  /**
   * Your custom domain.
   * Eg: https://billing.yourdomain.com
   */
  domain?: string;
  
  /**
   * The unique ID of the business entity under whose context the cart object or the drop-in script should work.
   * If not provided, the default business entity defined for the site is considered.
   * Note: This parameter is applicable only when multiple business entities have been created for the site.
   * Multiple Business Entities is currently in early access. Contact eap@chargebee.com to join the Early Adopter Program and enable this feature.
   */
  businessEntityId?: string;
  /**
   * This will be used for Chargebee.js functions (VAT validation, estimate APIs) and components & fields tokenization.
   * See more info on, how to use a publishable key.
   * 
   * @docs https://www.chargebee.com/docs/2.0/api_keys.html#types-of-api-keys_publishable-key
   */
  publishableKey?: string;
  isItemsModel?: boolean;
  enableRedirectMode?: boolean;
  iframeOnly?: boolean;
  enableGATracking?: boolean;
  enableGTMTracking?: boolean;
  enableFBQTracking?: boolean;
  enableFriendbuyTracking?: boolean;
  enableRefersionTracking?: boolean;
};

export type LoadChargebee = (
  config: ChargebeeConfig
) => Promise<ChargebeeInstance | null>;

declare global {
  interface Window {
    Chargebee?: Chargebee;
  }
}
