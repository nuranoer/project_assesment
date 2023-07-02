import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from './purchase/purchase.module';
import { KasirModule } from './kasir/kasir.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PurchaseModule,
    KasirModule,
    ProductModule,
    SupplierModule,
  ],
})
export class AppModule {}