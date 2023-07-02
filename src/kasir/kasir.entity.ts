import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Kasir {
    @PrimaryGeneratedColumn()
    id_kasir: number;

    @Column()
    nama_kasir: string;

    @Column()
    jenis_kelamin: string;

    @Column()
    alamat: string;
}