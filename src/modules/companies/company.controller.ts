import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.schema';
import { PaginateResult } from 'mongoose';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/companies')
  getAll(): Promise<PaginateResult<Company>> {
    return this.companyService.findAll();
  }
}
