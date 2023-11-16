import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  type: string;
}

export type CompanyDocument = Document & Company;

const CompanySchema = SchemaFactory.createForClass(Company).plugin(paginate);

export { CompanySchema };
