import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // ... other columns
}