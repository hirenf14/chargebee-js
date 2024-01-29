import {
  EXISTING_SCRIPT_MESSAGE,
  SCRIPT_URL,
  SCRIPT_URL_REGEX,
} from "./constants";
import { Chargebee } from "../types";
/**
 * Find Chargebee Script tag in document
 * @returns HTMLScriptElement
 */
export const findScript = (): HTMLScriptElement | null => {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    `script[src^="${SCRIPT_URL}"]`
  );
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (!SCRIPT_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};

/**
 * Inject Chargebee Script tag in document if doesn't exists
 * @returns HTMLScriptElement
 */
const injectScript = (): HTMLScriptElement => {
  const script = document.createElement("script");
  script.src = `${SCRIPT_URL}`;
  const headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error(
      "Expected document.body not to be null. Chargebee requires a <body> element."
    );
  }
  headOrBody.appendChild(script);
  return script;
};

let cbPromise: Promise<Chargebee | null> | null = null;

let onErrorListener: (() => void) | null = null;
let onLoadListener: (() => void) | null = null;

const onError = (reject: (reason?: any) => void) => () => {
  reject(new Error("Failed to load Chargebee"));
};

const onLoad =
  (
    resolve: (value: Chargebee | PromiseLike<Chargebee | null> | null) => void,
    reject: (reason?: any) => void
  ) =>
  () => {
    if (window.Chargebee) {
      resolve(window.Chargebee);
    } else {
      reject(new Error("Chargebee not available"));
    }
  };

/**
 * Load Chargebee script
 * @returns Chargebee
 */
export const loadScript = (): Promise<Chargebee | null> => {
  // Ensure that we only attempt to load Chargebee at most once
  if (cbPromise !== null) {
    return cbPromise;
  }

  cbPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Chargebee) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Chargebee) {
      resolve(window.Chargebee);
      return;
    }

    try {
      let script = findScript();

      if (!script) {
        script = injectScript();
      } else if (
        script &&
        onLoadListener !== null &&
        onErrorListener !== null
      ) {
        // remove event listeners
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);

        // if script exists, but we are reloading due to an error,
        // reload script to trigger 'load' event
        script.parentNode?.removeChild(script);
        script = injectScript();
      }

      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);

      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  // Resets cbPromise on error
  return cbPromise.catch((error) => {
    cbPromise = null;
    return Promise.reject(error);
  });
};
