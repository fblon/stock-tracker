import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockAddComponent } from './stock-tracker/stock-add/stock-add.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { StockListComponent } from './stock-tracker/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StockTrackerComponent,
    StockAddComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
