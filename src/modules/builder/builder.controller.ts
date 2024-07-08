import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { Builder } from './entities/builder.entity';
import { Response } from 'express';
import { AccessTokenGuard } from '@guards/access-token.guard';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createBuilderDto: CreateBuilderDto): Promise<Builder> {
    return await this.builderService.create(createBuilderDto);
  }

  @Get()
  async findAll(): Promise<Builder[]> {
    return await this.builderService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Builder> {
    return await this.builderService.findOneById(id);
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateBuilderDto: UpdateBuilderDto,
  ) {
    try {
      await this.builderService.update(id, updateBuilderDto);
      return res.status(HttpStatus.OK).json({ message: 'OK' });
    } catch {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'errr' });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.builderService.remove(id);
  }
}
