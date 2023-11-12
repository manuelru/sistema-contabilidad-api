import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { FabricanteService } from "../services/fabricante.service";
import { CreateFabricanteDto } from "../dto/fabricante.dto";

@Controller('fabricante')
export class FabricanteController
{
    constructor(private readonly fabricanteService:FabricanteService){}
    @Post()
    async Create(@Body() createFabricanteDto: CreateFabricanteDto){
        return this.fabricanteService.create(createFabricanteDto);
    }

    
    @Get()
    findAll(){
        return this.fabricanteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.fabricanteService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.fabricanteService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createFabricanteDto :CreateFabricanteDto,
        
    )
    {
        return this.fabricanteService.update(id, createFabricanteDto)
    }
}