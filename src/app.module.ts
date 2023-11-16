import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './modules/companies/company.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://saude-tv:w99qgkLoqxa0qZb0@kokua.g8cjh.mongodb.net/hermod?retryWrites=true&w=majority',
    ),
    CompanyModule,
  ],
})
export class AppModule {}
