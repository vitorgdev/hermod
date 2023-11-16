import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CompanyType } from '../company.interface'; // Ajuste o caminho conforme necessário

export class AddressDTO {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsNumber()
  zip: number;

  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}

export class CompanyCreateUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEnum(CompanyType)
  type: CompanyType;
}
