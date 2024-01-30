export * from "./chargebee";

import { ChargebeeConfig, ChargebeeInstance, Chargebee } from "./chargebee";

export const loadChargebee: LoadChargebee;

export type LoadChargebee = (
  config: ChargebeeConfig
) => Promise<ChargebeeInstance | null>;

declare global {
  interface Window {
    Chargebee?: Chargebee;
  }
}
