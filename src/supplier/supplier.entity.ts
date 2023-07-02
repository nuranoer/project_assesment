import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Barang } from '../product/product.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id_supplier: number;

  @Column({ type: 'date' })
  tanggal: Date;

  @ManyToOne(() => Barang)
  barang: Barang;

  @Column()
  stok: number;
}
