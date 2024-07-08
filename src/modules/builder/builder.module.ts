import { Module } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { BuilderController } from './builder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Builder } from './entities/builder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Builder])],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
