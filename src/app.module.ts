import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfigService } from './config/typeorm-config.service';
import { RouterConfigModule } from './modules/router-config/router-config.module';
import { BuilderModule } from './modules/builder/builder.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.example',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfigService,
    }),
    AuthModule,
    UserModule,
    RouterConfigModule,
    BuilderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
