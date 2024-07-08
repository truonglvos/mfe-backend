import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRouterConfigDto } from './dto/create-router-config.dto';
import { UpdateRouterConfigDto } from './dto/update-router-config.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouterConfig } from './entities/router-config.entity';

@Injectable()
export class RouterConfigService {
  constructor(
    @InjectRepository(RouterConfig)
    private routerRepository: Repository<RouterConfig>,
  ) {}
  async create(
    createRouterConfigDto: CreateRouterConfigDto,
  ): Promise<RouterConfig> {
    const router = await this.routerRepository.findOneBy({
      remoteEntry: createRouterConfigDto.remoteEntry,
    });
    if (router) {
      throw new BadRequestException('router already exists');
    }
    const newRouter = await this.routerRepository.create(createRouterConfigDto);
    return await this.routerRepository.save({
      ...newRouter,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async findAll(): Promise<RouterConfig[]> {
    return await this.routerRepository.find();
  }

  async findOne(id: string) {
    return await this.routerRepository.findOneBy({ id });
  }

  update(id: number, updateRouterConfigDto: UpdateRouterConfigDto) {
    return this.routerRepository.update(id, updateRouterConfigDto);
  }

  async remove(id: string) {
    return this.routerRepository.delete(id);
  }
}
