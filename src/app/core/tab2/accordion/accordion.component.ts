import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

    @Input() accordionData;


    constructor() {
    }

    ngOnInit() {
    }

    showTab(){

        this.accordionData.isOpen = (this.accordionData.isOpen) ? false : true;
    }


}
