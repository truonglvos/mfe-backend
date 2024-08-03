import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'builder' })
export class Builder {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ nullable: true })
  indexElement?: number;

  @Column({ nullable: true, type: 'longtext' })
  source?: string;

  @Column({ nullable: true, type: 'longtext' })
  builderSource?: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;
}
