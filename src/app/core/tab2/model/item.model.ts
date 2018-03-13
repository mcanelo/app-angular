export class ItemModel {

    itemName: string;
    description: string;
    info: Array<string>;
    image: string;

    constructor( data ) {

        this.itemName = data.itemName;
        this.description = data.description;
        this.info = data.info;
        this.image = data.image;

    }

}