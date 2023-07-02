import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>,
    ) {}

    async findAllSuppliers(): Promise<Supplier[]> {
        return await this.supplierRepository.find();
    }

    async findSupplierById(id_supplier: number): Promise<Supplier> {
        return await this.supplierRepository.findOne({ where: { id_supplier } });
    }

    async createSupplier(supplier: Supplier): Promise<Supplier> {
        const newSupplier = this.supplierRepository.create(supplier);
        return await this.supplierRepository.save(newSupplier);
    }

    async updateSupplier(id_supplier: number, supplier: Partial<Supplier>): Promise<Supplier> {
        await this.supplierRepository.update(id_supplier, supplier);
        return await this.supplierRepository.findOne({ where: { id_supplier } });
    }

    async deleteSupplier(id_supplier: number): Promise<void> {
        await this.supplierRepository.delete(id_supplier);
    }
}