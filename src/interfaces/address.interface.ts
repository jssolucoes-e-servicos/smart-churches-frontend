export interface IIbgeCodesType {
    city?: string;
    state?: string;
  }
  
  export interface ILocationType {
    lat?: string;
    lng?: string;
  }
  
  export interface IAddressType {
    type?: 'residential' | 'comercial' | 'other';
    inLine?: string;
    cep?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    ibgeCodes?: IbgeCodesType;
    location?: LocationType;
  }