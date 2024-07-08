import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from '../shared/strategies/snake-naming.strategy';

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    const database = this.configService.get('database');
    const migrations = [__dirname + '/../database/migrations/*{.ts,.js}'];
    return {
      name: connectionName,
      type: 'postgres',
      //   replication: {
      //     master: database.master,
      //     slaves: [...database.slaves],
      //   },
      ...database.master,
      namingStrategy: new SnakeNamingStrategy(),
      entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
      logging: ['query', 'error'],
      synchronize: true,
      migrations,
      autoLoadEntities: true,
      migrationsRun: true,
    };
  }
}
