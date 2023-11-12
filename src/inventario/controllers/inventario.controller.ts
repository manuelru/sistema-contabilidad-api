import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateInventarioDto } from "../dto/inventario.dto";
import { InventarioService } from "../services/inventario.service";

@Controller('inventario')
export class InventarioController
{
    constructor(private readonly inventarioService:InventarioService){}
    @Post()
    async create(@Body() createInventarioDto: CreateInventarioDto){
        return this.inventarioService.create(createInventarioDto);
    }

    
    @Get()
    findAll(){
        return this.inventarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.inventarioService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.inventarioService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createInventarioDto :CreateInventarioDto,
        
    )
    {
        return this.inventarioService.update(id, createInventarioDto)
    }
}