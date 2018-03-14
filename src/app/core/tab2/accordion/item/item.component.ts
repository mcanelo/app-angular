import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() itemData;

    infoOpened;

    constructor() {

        this.infoOpened = false;
    }

    ngOnInit() {
    }

    showInfo() {

        this.infoOpened = (this.infoOpened) ? false : true;
    }

}
