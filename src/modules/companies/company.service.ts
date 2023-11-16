import { PaginateModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { CompanyCreateUpdateDTO } from './dto/company-create-update.dto';
import { ICompany, ICompanyPaginate } from './company.interface';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: PaginateModel<ICompany>,
  ) {}

  async create(companyCreateDTO: CompanyCreateUpdateDTO): Promise<ICompany> {
    const createdCompany = new this.companyModel(companyCreateDTO);
    return createdCompany.save();
  }

  async findAll(): Promise<ICompanyPaginate> {
    const companies = await this.companyModel.paginate(
      {},
      { page: 1, limit: 10 },
    );
    return companies;
  }
}
