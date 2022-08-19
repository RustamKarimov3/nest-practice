import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string): string {
    return `deleted ${id}`;
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): string {
    return `${id}  ${updateProductDto.price} ${updateProductDto.title}`;
  }
}
