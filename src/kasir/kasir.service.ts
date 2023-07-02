import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kasir } from './kasir.entity';

@Injectable()
export class KasirService {
    constructor(
        @InjectRepository(Kasir)
        private kasirRepository: Repository<Kasir>,
    ) {}

    async findAllKasir(): Promise<Kasir[]> {
        return await this.kasirRepository.find();
    }

    async findKasirById(id_kasir: number): Promise<Kasir> {
        return await this.kasirRepository.findOne({ where: { id_kasir } });
    }

    async createKasir(kasir: Kasir): Promise<Kasir> {
        const newKasir = this.kasirRepository.create(kasir);
        return await this.kasirRepository.save(newKasir);
    }

    async updateKasir(id_kasir: number, kasir: Partial<Kasir>): Promise<Kasir> {
        await this.kasirRepository.update(id_kasir, kasir);
        return await this.kasirRepository.findOne({ where: { id_kasir } });
    }

    async deleteKasir(id: number): Promise<void> {
        await this.kasirRepository.delete(id);
    }
}