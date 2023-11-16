import { Injectable } from '@nestjs/common';
import { Document, PaginateModel, PaginateResult } from 'mongoose';

@Injectable()
export class BaseService<T extends Document> {
  constructor(protected model: PaginateModel<T>) {}

  async findOne(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async create(createDto: any): Promise<T> {
    const created = new this.model(createDto);
    await created.save();
    return this.model.findById(created._id).exec() as Promise<T>;
  }

  async findAll(queryParams: any): Promise<PaginateResult<T>> {
    const { page = 1, limit = 10 } = queryParams;
    return this.model.paginate({}, { page, limit });
  }

  async update(id: string, updateDto: Partial<T>): Promise<T> {
    return this.model
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec() as Promise<T>;
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndRemove(id).exec();
  }
}
