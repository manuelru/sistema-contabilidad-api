import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fabricante } from "../entities/fabricante.entity";
import { CreateFabricanteDto } from "../dto/fabricante.dto";


@Injectable()
export class FabricanteService{
    constructor(
        @InjectRepository(Fabricante)
        private fabricanteRepo: Repository<Fabricante>
    ){}

    async create(createFabricanteDto:CreateFabricanteDto){
        const product = this.fabricanteRepo.create(createFabricanteDto);
        await  this.fabricanteRepo.save(product);
        return product;
    }


    findOne(id: number){
        return this.fabricanteRepo.findOne({
            where:{id},
            relations:{
            }
        });
    }

    findAll(){
        return   this.fabricanteRepo.find({
            order: {id: 'ASC'},
        });
    }


    async remove(id:number){
        const fabricante =await this.findOne(id);
        await this.fabricanteRepo.remove(fabricante);
        return 'Fabricante eliminado';
    }

    async update(id: number, cambios: CreateFabricanteDto){
        const oldFabricante = await this.findOne(id);
        const updateFabricante = await this.fabricanteRepo.merge(oldFabricante, cambios);
        return this.fabricanteRepo.save(updateFabricante);
    }
}