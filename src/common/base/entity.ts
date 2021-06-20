import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

abstract class BaseEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;

  @Column({ type: 'varchar' })
  uuid: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'now()',
  })
  updatedAt: Date;
}

export default BaseEntity;
