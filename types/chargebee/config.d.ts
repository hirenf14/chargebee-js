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
   *
   * Eg: https://billing.yourdomain.com
   */
  domain?: string;

  /**
   * The unique ID of the business entity under whose context the cart object or the drop-in script should work.
   *
   * If not provided, the default business entity defined for the site is considered.
   *
   * Note:
   * * This parameter is applicable only when multiple business entities have been created for the site.
   * * Multiple Business Entities is currently in early access. Contact eap@chargebee.com to join the Early Adopter Program and enable this feature.
   */
  businessEntityId?: string;
  /**
   * This will be used for Chargebee.js functions (VAT validation, estimate APIs) and components & fields tokenization.
   *
   * @docs https://www.chargebee.com/docs/2.0/api_keys.html#types-of-api-keys_publishable-key
   */
  publishableKey?: string;
  /**
   * This will enable support for product catalog 2.0.
   */
  isItemsModel?: boolean;
  /**
   * If this is enabled, end user will be redirected to chargebee checkout and self-serve portal page instead of opening in a modal box.
   * This is needed, if amazon pay is configured as one of your supported payment methods.
   * Please make sure you have configured redirect URL in checkout and self-serve portal, so that the user is able to navigate back to the app.
   */
  enableRedirectMode?: boolean;
  /**
   * This will work only on mobile browsers. Set `true` to open the Checkout or Portal as an iFrame on the same browser tab.
   * 
   * * If Checkout or Portal is opened from within an application, it opens in a WebView tab.
   * * If Checkout or Portal is opened from a WebView tab, it opens on the same WebView tab.
   * * If Checkout or Portal is opened from a browser tab, it opens on the same browser tab.
   */
  iframeOnly?: boolean;
    /**
     * This will enable Google Analytics (analytics.js) tracking.
     * Follow the steps to integrate Google Analytics with Chargebee checkout(In-app checkout).
     * 
     * @docs https://www.chargebee.com/checkout-portal-docs/feature-google-pixel-tracking.html
     */
  enableGATracking?: boolean;
  /**
   * This will enable Google tag manager).
   * 
   * @docs https://www.chargebee.com/docs/2.0/gtm.html
   */
  enableGTMTracking?: boolean;
  /**
   * This will enable Facebook pixel tracking.
   * Follow the steps to integrate Facebook pixel tracking with Chargebee checkout (In-app checkout).
   * 
   * @docs https://www.chargebee.com/checkout-portal-docs/feature-facebook-pixel-tracking.html
   */
  enableFBQTracking?: boolean;
  /**
   * If this is enabled, Chargebee will send customer information and order information to friendbuy and will also open friendbuy's post purchase widget based on your integration settings.
   * Please make sure you whitelist your domain in the checkout settings page.
   */
  enableFriendbuyTracking?: boolean;
  /**
   * This will enable Refersion tracking (Referral integration).
   * 
   * Note: This is available only in PC 1.0
   * 
   * @docs https://www.chargebee.com/docs/1.0/refersion.html
   */
  enableRefersionTracking?: boolean;
};
