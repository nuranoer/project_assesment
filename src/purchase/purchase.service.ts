import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private purchaseRepository: Repository<Purchase>,
    ) {}

    async createPurchase(purchase: Purchase): Promise<Purchase> {
        const newPurchase = this.purchaseRepository.create(purchase);
        return await this.purchaseRepository.save(newPurchase);
    }

    async findAllPurchases(): Promise<Purchase[]> {
        return await this.purchaseRepository.find();
    }

    async findPurchaseByNoNota(no_nota: string): Promise<Purchase> {
        return await this.purchaseRepository.findOne({ where: { no_nota } });
    }
}