import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { Builder } from './entities/builder.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BuilderService {
  constructor(
    @InjectRepository(Builder)
    private repository: Repository<Builder>,
  ) {}
  async create(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    try {
      const builder = await this.repository.create(createBuilderDto);
      return await this.repository.save({
        ...builder,
        createdAt: new Date(),
      });
    } catch {
      throw new BadRequestException('Create builder failed');
    }
  }

  async findAll(): Promise<Builder[]> {
    return await this.repository.find();
  }

  async findOneById(id: string): Promise<Builder> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, updateBuilderDto: UpdateBuilderDto): Promise<any> {
    try {
      return await this.repository.update(id, {
        ...updateBuilderDto,
        updatedAt: new Date(),
      });
    } catch {
      throw new BadRequestException(`Update builder failed with id: ${id}`);
    }
  }

  async remove(id: string): Promise<any> {
    return await this.repository.delete(id);
  }
}
