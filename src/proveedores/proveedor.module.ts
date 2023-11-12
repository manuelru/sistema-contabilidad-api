import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProveedorController } from "./controllers/proveedor.controller";
import { ProveedorService } from "./services/proveedor.service";
import { Proveedor } from "./entities/proveedor.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Proveedor])],
    controllers: [ProveedorController],
    providers: [ProveedorService],
  })
  export class ProveedorModule {}