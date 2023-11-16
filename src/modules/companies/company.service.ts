import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { BaseService } from '../../shared/base.service';
import { ICompany } from './company.interface';
import { PaginateModel } from 'mongoose';

@Injectable()
export class CompanyService extends BaseService<ICompany> {
  constructor(
    @InjectModel(Company.name) companyModel: PaginateModel<ICompany>,
  ) {
    super(companyModel);
  }
}
