import type { AddressType } from '@/interfaces';

export interface IChurchBasic {
    id: string;
    name: string;
    fantasy: string;
    image?: string | null
  }
  
  export interface IChurch {
    id: string;
    name: string;
    fantasy?: string;
    cnpj: string;
    ie?: string;
    email?: string;
    phone?: string;
    shepherd: string;
    image?: string;
    address?: AddressType;
    isThirst?: boolean;
    customDomain?: string;
    active?: boolean;
    createdAt: Date;
    updatedAt: Date;
  }