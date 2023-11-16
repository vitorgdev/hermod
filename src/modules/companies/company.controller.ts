import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ICompany, ICompanyPaginate } from './company.interface';
import { CompanyCreateUpdateDTO } from './dto/company-create-update.dto';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/companies')
  getAll(): Promise<ICompanyPaginate> {
    return this.companyService.findAll();
  }

  @Post('/companies')
  create(@Body() companyCreateDto: CompanyCreateUpdateDTO): Promise<ICompany> {
    console.log(companyCreateDto);

    return this.companyService.create(companyCreateDto);
  }
}
