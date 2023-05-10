import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { ProductosModule } from './productos/productos.module';
import { ProductoEntity } from "./productos/entities/producto.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "161.97.116.226",
      port: 33060,
      username: "root",
      password: "Qx7I76yDLfZ",
      database: "preus_bd",
      entities: [ProductoEntity],
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
      keepConnectionAlive: true

    }),
    ProductosModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
