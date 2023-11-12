import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './product/products.module';
import { UsersModule } from './user/products.module';
import { ProveedorModule } from './proveedores/proveedor.module';
import { InventarioModule } from './inventario/inventario.module';
import { FabricanteModule } from './fabricante/fabricante.module';
import { CategoryModule } from './categoria/category.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'CMrrjmrr09.',
    database: 'sistema-contable',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  ProductsModule,
  UsersModule,
  ProveedorModule,
  InventarioModule,
  FabricanteModule,
  CategoryModule,
  FilesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
