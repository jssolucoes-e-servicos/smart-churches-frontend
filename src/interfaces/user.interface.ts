import { IChurchBasic } from "./church.interface";

export interface IUser {
  id: string,
  name: string;
  email?: string | null;
  genre: string,
  birth?: string | null;
  photo?: string | null;
  loginAttempts: number,
  loginStats: string,
  inRecovery: boolean,
  twoFactorAuthentication: Object | null,
  permitChurch: boolean,
  permitPortal: boolean,
  dizimist: boolean,
  member: boolean,
  singnedAt: string | null,
  documents: Object[],
  addresses: Object[],
  phones: Object[],
  church: IChurchBasic,
  cells: Object[]
}
