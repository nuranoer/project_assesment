import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { KasirService } from './kasir.service';
import { Kasir } from './kasir.entity';

@Controller('kasir')
export class KasirController {
    constructor(private readonly kasirService: KasirService) {}

    @Get()
    async findAll(): Promise<Kasir[]> {
        return this.kasirService.findAllKasir();
    }

    @Get(':id_kasir')
    async findById(@Param('id_kasir') id_kasir: number): Promise<Kasir> {
        return this.kasirService.findKasirById(id_kasir);
    }

    @Post()
    async create(@Body() kasir: Kasir): Promise<Kasir> {
        return this.kasirService.createKasir(kasir);
    }

    @Put(':id_kasir')
    async update(@Param('id_kasir') id_kasir: number, @Body() kasir: Partial<Kasir>): Promise<Kasir> {
        return this.kasirService.updateKasir(id_kasir, kasir);
    }

    @Delete(':id_kasir')
    async delete(@Param('id_kasir') id_kasir: number): Promise<void> {
        return this.kasirService.deleteKasir(id_kasir);
    }
}