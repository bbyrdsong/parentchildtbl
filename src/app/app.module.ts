import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentSmartComponent } from './parent-smart/parent-smart.component';
import { ParentPrezComponent } from './parent-prez/parent-prez.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentSmartComponent,
    ParentPrezComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
