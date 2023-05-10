import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from "@nestjs/common";
import { ProductoEntity } from "./entities/producto.entity";
import { ProductsService } from "./productos.service";

@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductsService) {}

  @Post('new')
  @HttpCode(204)
  async create(@Body() newProduct: ProductoEntity, @Res() response): Promise<ProductoEntity> {

  const producto = await this.productosService.create(newProduct);

  return response.status(HttpStatus.OK).json({producto})

  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: number, @Res() response) {

    let productRem = await this.productosService.remove(id);

    if (productRem.affected == 0) {
      return response.status(HttpStatus.NOT_FOUND).json("Producto no encontrado");
    }

    return response.status(HttpStatus.OK).json("Producto eliminado");
  }


  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }*/

 /* @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }*/
}
