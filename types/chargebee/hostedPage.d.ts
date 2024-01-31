export interface HostedPage {
  /**
   * @description Unique identifier generated for each hosted page requested.
   */

  id?: string;

  /**
   * @description Type of the requested hosted page. \* collect_now - Collect Unpaid Invoices for a Customer \* checkout_gift - Checkout a gift subscription \* checkout_new - Checkout new Subscription \* extend_subscription - To extend a Subscription period \* checkout_one_time - Checkout one time \* update_payment_method - Update Payment Method for a Customer \* view_voucher - View Details of a voucher \* pre_cancel - This hosted page is used to help retain customers when they attempt to cancel their account or subscription. \* manage_payment_sources - Manage Payments for a customer \* checkout_existing - Checkout existing Subscription \* claim_gift - Claim a gift subscription
   */

  type?:
    | "update_payment_method"
    | "checkout_one_time"
    | "manage_payment_sources"
    | "checkout_new"
    | "view_voucher"
    | "collect_now"
    | "checkout_existing"
    | "extend_subscription"
    | "pre_cancel";

  /**
   * @description Unique URL for the hosted page that will be included in your website.
   */

  url?: string;

  /**
   * @description Indicating the current state of the hosted page resource. \* acknowledged - Indicates the succeeded hosted page is acknowledged. \* created - Indicates the hosted page is just created. \* requested - Indicates the hosted page is requested by the website \* cancelled - Indicates the page is cancelled by the end user after requesting it. \* succeeded - Indicates the hosted page is successfully submitted by the user and response is sent to the return url.
   */

  state?: "requested" | "acknowledged" | "created" | "cancelled" | "succeeded";

  /**
   * @description You can pass through any content specific to the hosted page request and get it back after user had submitted the hosted page.
   */

  pass_thru_content?: string;

  /**
   * @description Indicates when this hosted page url is generated.
   */

  created_at?: number;

  /**
   * @description Indicates when this hosted page url will expire. After this, the hosted page cannot be accessed.
   */

  expires_at?: number;

  /**
      * @description This attribute will be returned only during retrieve hosted page API call and also the retrieved hosted page resource state should be either in &quot;succeeded&quot; or &quot;cancelled&quot; state.  
If hosted page state is &quot;succeeded&quot;, then the subscription, customer, card \&amp; invoice(optional) resources during checkout can be obtained.   
If hosted page is state is &quot;cancelled&quot;, then it will be empty i.e no information about checkout.
      */

  content: object;

  /**
   * @description Timestamp indicating when this hosted page was last updated.
   */

  updated_at?: number;

  /**
   * @description The version number of this resource. For every change made to the resource, &#x60;resource_version&#x60; is updated with a new timestamp in milliseconds.
   */

  resource_version?: number;

  /**
      * @description Customer Info (email, first name and last name) given in the checkout page used for tracking abandoned carts.  
[Learn more](https://www.chargebee.com/docs/abandoned-carts.html)
      */

  checkout_info?: object;

  /**
   * @description The unique ID of the [business entity](/docs/api/advanced-features?prod_cat_ver&#x3D;2#mbe) of this &#x60;hosted_page&#x60;.
   */

  business_entity_id?: string;
}
