import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Kasir } from '../kasir/kasir.entity';
import { Barang } from '../product/product.entity';

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn('increment')
    id_transaksi: number;

    @ManyToOne(() => Kasir)
    kasir: Kasir;

    @ManyToOne(() => Barang)
    barang: Barang;

    @Column()
    no_nota: string;

    @Column()
    tanggal: Date;

    @Column()
    total_barang: number;

    @ManyToOne(() => Purchase, (purchase) => purchase.barang)
    purchase: Purchase;

    @Column()
    created_at: string;
}