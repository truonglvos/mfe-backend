import { Module } from '@nestjs/common';
import { RouterConfigService } from './router-config.service';
import { RouterConfigController } from './router-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterConfig } from './entities/router-config.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([RouterConfig]), AuthModule],
  controllers: [RouterConfigController],
  providers: [RouterConfigService],
})
export class RouterConfigModule {}
