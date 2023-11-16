import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BaseService } from './base.service';
import { Document, PaginateResult } from 'mongoose';

export class BaseController<T extends Document> {
  constructor(protected readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(@Query() query): Promise<PaginateResult<T>> {
    return this.baseService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T> {
    return this.baseService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: T): Promise<T> {
    return this.baseService.create(createDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: T): Promise<T> {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.baseService.remove(id);
  }
}
