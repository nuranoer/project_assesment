import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barang } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Barang)
        private productRepository: Repository<Barang>,
    ) {}

    async findAllProducts(): Promise<Barang[]> {
        return await this.productRepository.find();
    }

    async findProductById(id_barang: number): Promise<Barang> {
        return await this.productRepository.findOne({ where: { id_barang } });
    }

    async createProduct(product: Barang): Promise<Barang> {
        const newProduct = this.productRepository.create(product);
        return await this.productRepository.save(newProduct);
    }

    async updateProduct(id_barang: number, product: Partial<Barang>): Promise<Barang> {
        await this.productRepository.update(id_barang, product);
        return await this.productRepository.findOne({ where: { id_barang } });
    }

    async deleteProduct(id_barang: number): Promise<void> {
        await this.productRepository.delete(id_barang);
    }
}
