import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id);
    }
    @Post()
    create(@Body() createItemDto: CreateItemDto): Item {
        //validate the incoming data
        console.log(createItemDto);
        let item: Item = {
            id: '3',
            name: createItemDto.name,
            qty: createItemDto.qty
        };
        return this.itemsService.create(item);
    }
}
