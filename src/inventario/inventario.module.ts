import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InventarioController } from "./controllers/inventario.controller";
import { Inventario } from "./entities/inventario.entity";
import { InventarioService } from "./services/inventario.service";

@Module({
    imports: [TypeOrmModule.forFeature([Inventario])],
    controllers: [InventarioController ],
    providers: [InventarioService],
  })
  export class InventarioModule {}