import { HostedPage } from "./hostedPage";

export type OpenCheckoutOptions = {
  /**
   * @returns promise that resolves a hosted page object
   */
  hostedPage: () => Promise<HostedPage>;
  /**
   * Specifies the checkout layout that overrides the default checkout layout configured in the Checkout & Self-Serve Portal settings.
   * * The `layout` parameter is currently in early access. Contact eap@chargebee.com to join the Early Adopter Program.
   */
  layout: "in_app" | "full_page";
  /**
   * This function will be called once the checkout page is loaded.
   */
  loaded?: () => void;
  /**
   * @param error Exception from hostedPage promise.
   * 
   * This function will be called if the promise returned from the hostedPage function rejects an error.
   */
  error?: (error: Error) => void;
  /**
   * @param hostedPageId string
   * 
   * This function will be called once the checkout is successful.
   */
  success?: (hostedPageId: string) => void;
  /**
   * This function will be called once the checkout is closed by the end user.
   * 
   * @returns void
   */
  close: () => void;
  /**
   * This function will be called everytime a user navigates from one step to another during checkout.
   * ou can send the step value to different tracking services for identiyfing checkout drop-off.
   * 
   * @param currentStep 
   * @returns void
   */
  step: (currentStep: string) => void;
};
