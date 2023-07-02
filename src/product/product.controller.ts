import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Barang } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll(): Promise<Barang[]> {
        return this.productService.findAllProducts();
    }

    @Get(':id_barang')
    async findById(@Param('id_barang') id_barang: number): Promise<Barang> {
        return this.productService.findProductById(id_barang);
    }

    @Post()
    async create(@Body() product: Barang): Promise<Barang> {
        return this.productService.createProduct(product);
    }

    @Put(':id_barang')
    async update(@Param('id_barang') id_barang: number, @Body() product: Partial<Barang>): Promise<Barang> {
        return this.productService.updateProduct(id_barang, product);
    }

    @Delete(':id_barang')
    async delete(@Param('id') id: number): Promise<void> {
        return this.productService.deleteProduct(id);
    }
}
