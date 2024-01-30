export const SCRIPT_URL = "https://js.chargebee.com/v2/chargebee.js";
export const SCRIPT_URL_REGEX =
  /^https:\/\/js\.chargebee\.com\/v2\/chargebee\.js\/?(\?.*)?$/;

export const EXISTING_SCRIPT_MESSAGE =
  "loadChargebee was called but a script already exists in the document;";

export const EXISTING_INSTANCE_MESSAGE =
  "loadChargebee was called but an instance is already created;";
