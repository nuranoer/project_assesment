import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Barang {
    @PrimaryGeneratedColumn()
    id_barang: number;

    @Column()
    nama_barang: string;

    @Column()
    stok_barang: string;

    @Column()
    harga_barang: string;
}