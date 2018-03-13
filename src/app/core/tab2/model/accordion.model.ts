interface ItemInterface {
    itemName: string;
    description: string;
    info: Array<string>;
    image: string;

}

export class AccordionModel {

    id: number;
    name: string;
    items: Array<ItemInterface>;
    isOpen: boolean;

    constructor( data, items, open? ) {

        this.id = data.id;
        this.name = data.name;
        this.items = items;
        this.isOpen = open || false;

    }

}