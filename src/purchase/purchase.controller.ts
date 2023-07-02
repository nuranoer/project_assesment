import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.entity';

@Controller('purchase')
    export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService) {}

    @Post()
    async create(@Body() purchase: Purchase): Promise<Purchase> {
        return this.purchaseService.createPurchase(purchase);
    }

    @Get()
    async findAll(): Promise<Purchase[]> {
        return this.purchaseService.findAllPurchases();
    }

    @Get(':no_nota')
    async findByNoNota(@Param('no_nota') no_nota: string): Promise<Purchase> {
        return this.purchaseService.findPurchaseByNoNota(no_nota);
    }

    @Get('/search')
    async searchByNoNota(@Query('keyword') keyword: string): Promise<Purchase[]> {
        return this.purchaseService.searchPurchasesByNoNota(keyword);
    }

    @Get('/paginate')
    async paginatePurchases(
        @Query('page') page: number,
        @Query('limit') limit: number,
    ): Promise<Purchase[]> {
        return this.purchaseService.paginatePurchases(page, limit);
    }
}