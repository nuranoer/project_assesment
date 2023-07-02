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

  async searchPurchasesByNoNota(keyword: string): Promise<Purchase[]> {
    return await this.purchaseRepository
      .createQueryBuilder('purchase')
      .where('purchase.no_nota LIKE :keyword', { keyword: `%${keyword}%` })
      .getMany();
  }

  async paginatePurchases(page: number, limit: number): Promise<Purchase[]> {
    const skip = (page - 1) * limit;
    return await this.purchaseRepository.find({
      skip,
      take: limit,
    });
  }
}