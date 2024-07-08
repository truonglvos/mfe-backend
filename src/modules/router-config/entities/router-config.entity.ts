import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum RouterType {
  Script = 'script',
  Module = 'module',
  Manifest = 'manifest',
}

@Entity({ name: 'router-config' })
export class RouterConfig {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ default: 'module' })
  type?: string;

  @Column()
  remoteEntry: string;

  @Column()
  exposedModule: string;

  @Column()
  path: string;

  @Column({ nullable: true })
  menu?: string;

  @Column({ default: false })
  guard?: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
