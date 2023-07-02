import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KasirController } from './kasir.controller';
import { KasirService } from './kasir.service';
import { Kasir } from './kasir.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kasir])],
  controllers: [KasirController],
  providers: [KasirService],
})
export class KasirModule {}