import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateCategoryDto } from "../dto/category.dto";
import { CategoryService } from "../services/category.service";

@Controller('category')
export class CategoryController
{
    constructor(private readonly categoryService:CategoryService){}
    @Post()
    async CreateProduct(@Body() createCategoryDto: CreateCategoryDto){
        return this.categoryService.create(createCategoryDto);
    }

    
    @Get()
    findAll(){
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.categoryService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.categoryService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createCategoryDto :CreateCategoryDto,
        
    )
    {
        return this.categoryService.update(id, createCategoryDto)
    }
}