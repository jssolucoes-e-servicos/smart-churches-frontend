import { IAddressType } from "./address.interface";

export interface ICell {
    id: string;
  churchId: string;
  name: string;
  slug?: string | null;
  color?: string | null;
  image?: string | null;
  day: string;
  hour: string;
  method: string;
  leaderId: string;
  host?: string | null;
  address: IAddressType
  cellsNetworkId: string;
  active: Boolean;
  createdAt: Date;
  updatedAt: Date;
}