import { Injectable } from '@nestjs/common';

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { ProductoEntity } from "./entities/producto.entity";

@Injectable()
export class ProductsService{
  constructor(

    @InjectRepository(ProductoEntity)
    private productsEntityRepository: Repository<ProductoEntity>,
  ) {}

  findAll(): Promise<ProductoEntity[]> {
    return this.productsEntityRepository.find({
      order: {
        createdDate: "DESC"
      }
    })
      ;
  }

  findOne(id: number): Promise<ProductoEntity> {
    return this.productsEntityRepository.findOne({
      where: {
        id: id
      }
    });
  }

   create(newProduct: ProductoEntity): Promise<ProductoEntity> {
    return this.productsEntityRepository.save(newProduct);
  }


  async remove(id: number) {

    return await this.productsEntityRepository.delete({id: id});
  }
}
