import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { Tab1Component } from './core/tab1/tab1.component';
import { Tab2Component } from './core/tab2/tab2.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './core/tab1/card/card.component';
import { AccordionComponent } from './core/tab2/accordion/accordion.component';
import { ItemComponent } from './core/tab2/accordion/item/item.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Tab1Component,
    Tab2Component,
    NavbarComponent,
    CardComponent,
    AccordionComponent,
    ItemComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
