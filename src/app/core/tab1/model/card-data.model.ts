export class CardDataModel {

    id: number;
    name: string;
    options: Array<string>;
    selected: boolean;

    constructor( data ) {

        this.id = data.id;
        this.name = data.name;
        this.options = data.options;
        this.selected = false;

    }

}