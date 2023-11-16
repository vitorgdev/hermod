import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ICompany } from './company.interface';
import { BaseController } from 'src/shared/base.controller';

@Controller('/companies')
export class CompanyController extends BaseController<ICompany> {
  constructor(protected readonly companyService: CompanyService) {
    super(companyService);
  }
}
