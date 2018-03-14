import {Component, OnInit} from '@angular/core';
import {SERVICES_LIST} from "./mock/mock.data";
import {CardDataModel} from "./model/card-data.model";

@Component({
    selector: 'app-tab1',
    templateUrl: './tab1.component.html',
    styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

    servicesList: Array<any> = [];

    constructor() {

    }

    ngOnInit() {

        this.getCardList();

    }

    getCardList(){

        let auxArray = [];

        for(let service of SERVICES_LIST){

            auxArray.push( new CardDataModel( service ));

        }

        this.servicesList = auxArray;
    }

    setSelectedPlan( $event ){

        for(let service of this.servicesList){

            if(service.id != $event.id && service.selected) {
                service.selected = false;
                break;
            }

        }

    }

}
