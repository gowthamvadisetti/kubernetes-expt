import { Injectable } from '@nestjs/common';
import { Item} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items = [
        // create two dummy items
        {
            id: '1',
            name: 'Item One',
            qty: 100
        },
        {
            id: '2',
            name: 'Item Two',
            qty: 50
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item | undefined {
        return this.items.find(item => item.id === id) as Item;
    }

    create(item: Item) {
        // add a new item to the list
        this.items.push(item);
        return item;
    }




}
