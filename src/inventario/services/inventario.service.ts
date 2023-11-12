import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Inventario } from "../entities/inventario.entity";
import { CreateInventarioDto } from "../dto/inventario.dto";
@Injectable()
export class InventarioService{
    constructor(
        @InjectRepository(Inventario)
        private inventarioRepo: Repository<Inventario>
    ){}

    async create(createInventarioDto:CreateInventarioDto){
        const inventario = this.inventarioRepo.create(createInventarioDto);
        await  this.inventarioRepo.save(inventario);
        return inventario;
    }


    findOne(id: number){
        return this.inventarioRepo.findOne({
            where:{id},
            relations:{
            }
        });
    }

    findAll(){
        return   this.inventarioRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const inventario =await this.findOne(id);
        await this.inventarioRepo.remove(inventario);
        return 'inventario eliminado';
    }

    async update(id: number, cambios: CreateInventarioDto){
        const oldInventario = await this.findOne(id);
        const updateInventario = await this.inventarioRepo.merge(oldInventario, cambios);
        return this.inventarioRepo.save(updateInventario);
    }
}