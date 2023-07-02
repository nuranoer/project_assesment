import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Barang } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Barang])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}