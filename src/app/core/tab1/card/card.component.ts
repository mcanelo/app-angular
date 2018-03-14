import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() dataToLoad: object;
    @Output() emitSelected = new EventEmitter<any>();

    data;

    constructor() {
    }

    ngOnInit() {
        this.data = this.dataToLoad;
    }

    selectPlan(value){

        this.data.selected = value;
        this.emitSelected.emit({id: this.data.id});
    }

}
