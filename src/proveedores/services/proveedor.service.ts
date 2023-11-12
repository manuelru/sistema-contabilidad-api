import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProveedorDto } from "../dto/proveedor.dto";
import { Proveedor } from "../entities/proveedor.entity";

@Injectable()
export class ProveedorService{
    constructor(
        @InjectRepository(Proveedor)
        private proveedorRepo: Repository<Proveedor>
    ){}

    async create(createProveedorDto:CreateProveedorDto){
        const proveedor = this.proveedorRepo.create(createProveedorDto);
        await  this.proveedorRepo.save(proveedor);
        return proveedor;
    }


    findOne(id: number){
        return this.proveedorRepo.findOne({
            where:{id},
            relations:{
            }
        });
    }

    findAll(){
        return   this.proveedorRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const product =await this.findOne(id);
        await this.proveedorRepo.remove(product);
        return 'Proveedor eliminado';
    }

    async update(id: number, cambios: CreateProveedorDto){
        const oldProvedor = await this.findOne(id);
        const updateProveedor = await this.proveedorRepo.merge(oldProvedor, cambios);
        return this.proveedorRepo.save(updateProveedor);
    }
}