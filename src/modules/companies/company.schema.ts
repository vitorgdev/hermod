import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import { ICompany, IAddress, CompanyType } from './company.interface';

@Schema()
export class Company implements ICompany {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    required: true,
    type: Object,
  })
  address: IAddress;

  @Prop({ required: true, enum: CompanyType })
  type: CompanyType;
}

export type CompanyDocument = Document & Company;

const CompanySchema = SchemaFactory.createForClass(Company).plugin(paginate);

export { CompanySchema };
