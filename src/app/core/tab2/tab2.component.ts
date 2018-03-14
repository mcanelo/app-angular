import { Component, OnInit } from '@angular/core';
import { AccordionModel } from "./model/accordion.model";
import { ItemModel } from "./model/item.model";
import { ACCORDION_LIST } from "./mock/mock.data";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

    accordionList: Array<object> = [];

    constructor() {

    }

    ngOnInit() {

        this.getCardList();

    }

    getCardList(){

        let cont = 0,
            open;

        for(let accodion of ACCORDION_LIST){

            let items = [];

            for(let item of accodion.items){

                items.push( new ItemModel(item) )

            }

            open = (cont == 0) ? true : false; //the first accordion will be opened by default

            this.accordionList.push( new AccordionModel( accodion, items, open ));

            cont++;

        }

    }

}
