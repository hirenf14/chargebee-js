export type Chargebee = any;


export type ChargebeeConfig = {
    site: string;
    domain?: string;
    businessEntityId?: string;
}

export const loadChargebee: (config: ChargebeeConfig) => Promise<Chargebee | undefined>;

declare global {
  interface Window {
    Chargebee?: Chargebee;
  }
}
