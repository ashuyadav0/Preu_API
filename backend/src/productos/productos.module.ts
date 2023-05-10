import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductoEntity } from "./entities/producto.entity";
import { ProductsService } from "./productos.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
  controllers: [ProductosController],
  providers: [ProductsService]
})
export class ProductosModule {}
