import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';

@Controller('supplier')
    export class SupplierController {
    constructor(private readonly supplierService: SupplierService) {}

    @Get()
    async findAll(): Promise<Supplier[]> {
        return this.supplierService.findAllSuppliers();
    }

    @Get(':id_supplier')
    async findById(@Param('id_supplier') id_supplier: number): Promise<Supplier> {
        return this.supplierService.findSupplierById(id_supplier);
    }

    @Post()
    async create(@Body() supplier: Supplier): Promise<Supplier> {
        return this.supplierService.createSupplier(supplier);
    }

    @Put(':id_supplier')
    async update(@Param('id_supplier') id_supplier: number, @Body() supplier: Partial<Supplier>): Promise<Supplier> {
        return this.supplierService.updateSupplier(id_supplier, supplier);
    }

    @Delete(':id_supplier')
    async delete(@Param('id_supplier') id_supplier: number): Promise<void> {
        return this.supplierService.deleteSupplier(id_supplier);
    }
}