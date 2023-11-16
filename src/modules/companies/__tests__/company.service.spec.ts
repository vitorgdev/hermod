import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from '../company.service';
import { Company } from '../company.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('CompanyService', () => {
  let service: CompanyService;
  let mockCompanyModel;

  beforeEach(async () => {
    mockCompanyModel = {
      paginate: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: getModelToken(Company.name),
          useValue: mockCompanyModel,
        },
      ],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should call paginate method of the model', async () => {
      const queryParams = { page: 1, limit: 10 };
      await service.findAll(queryParams);

      expect(mockCompanyModel.paginate).toHaveBeenCalledWith(
        {},
        {
          page: queryParams.page,
          limit: queryParams.limit,
        },
      );
    });
  });

  // Mais testes podem ser adicionados aqui
});
