import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTrainglesComponent } from './Component/Traingle/list-traingles/list-traingles.component';
import { AddTraingleComponent } from './Component/Traingle/add-traingle/add-traingle.component';
import { EditTraingleComponent } from './Component/Traingle/edit-traingle/edit-traingle.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
      ListTrainglesComponent,
    AddTraingleComponent,
    EditTraingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
