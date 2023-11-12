import { Module } from "@nestjs/common";
import { Products } from "./entities/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./controllers/product.controller";
import { ProductsService } from "./services/product.service";
import { ProductImage } from "./entities/product-image.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Products,ProductImage])],
    controllers: [ProductsController ],
    providers: [ProductsService],
  })
  export class ProductsModule {}