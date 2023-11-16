import { PaginateResult } from 'mongoose';

export enum CompanyType {
  Clinic = 'Clinic',
  Laboratory = 'Laboratory',
  Pharmacy = 'Pharmacy',
  Hospital = 'Hospital',
  School = 'School',
  University = 'University',
  Company = 'Company',
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: number;
  latitude: number;
  longitude: number;
}

export interface ICompany {
  name: string;
  address: IAddress;
  phoneNumber: string;
  email: string;
  type: CompanyType;
}

export interface ICompanyPaginate extends PaginateResult<ICompany> {}
