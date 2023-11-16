import { PaginateResult, PaginateModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { CompanyCreateUpdateDTO } from './dto/company-create-update.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: PaginateModel<Company>,
  ) {}

  async create(createCatDto: CompanyCreateUpdateDTO): Promise<Company> {
    const createdCat = new this.companyModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<PaginateResult<Company>> {
    return this.companyModel.paginate({}, { page: 1, limit: 10 });
  }
}
