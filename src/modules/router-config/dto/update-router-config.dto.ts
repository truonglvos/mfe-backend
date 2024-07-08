import { PartialType } from '@nestjs/mapped-types';
import { CreateRouterConfigDto } from './create-router-config.dto';

export class UpdateRouterConfigDto extends PartialType(CreateRouterConfigDto) {
  updatedAt: Date;
}
