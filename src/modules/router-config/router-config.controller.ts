import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RouterConfigService } from './router-config.service';
import { CreateRouterConfigDto } from './dto/create-router-config.dto';
import { UpdateRouterConfigDto } from './dto/update-router-config.dto';
import { AccessTokenGuard } from '@guards/access-token.guard';

@Controller('router-config')
export class RouterConfigController {
  constructor(private readonly routerConfigService: RouterConfigService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() createRouterConfigDto: CreateRouterConfigDto) {
    return this.routerConfigService.create(createRouterConfigDto);
  }

  @Get()
  findAll() {
    return this.routerConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routerConfigService.findOne(id);
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRouterConfigDto: UpdateRouterConfigDto,
  ) {
    return this.routerConfigService.update(+id, updateRouterConfigDto);
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routerConfigService.remove(id);
  }
}
