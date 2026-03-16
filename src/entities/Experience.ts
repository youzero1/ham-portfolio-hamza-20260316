import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('experiences')
export class Experience {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  company!: string;

  @Column({ type: 'varchar', length: 255 })
  role!: string;

  @Column({ type: 'varchar', length: 100 })
  duration!: string;

  @Column({ type: 'varchar', length: 100 })
  location!: string;

  @Column({ type: 'text' })
  accomplishments!: string;

  @Column({ type: 'boolean', default: false })
  current!: boolean;

  @Column({ type: 'integer', default: 0 })
  sortOrder!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
