import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NordFilterPanelComponent } from './nord-filter-panel/nord-filter-panel.component';
import { NordFilterPanel2Component } from './nord-filter-panel2/nord-filter-panel2.component';
import { NordFilterPanel3Component } from './nord-filter-panel3/nord-filter-panel3.component';

import {
	MatInputModule, 
	MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
	MatRadioModule
} from '@angular/material';
import { NsPadLeftDirective } from './ns-pad-left.directive';
import { NsPadRightDirective } from './ns-pad-right.directive';


@NgModule({
  declarations: [
    AppComponent,
    NordFilterPanelComponent,
    NordFilterPanel2Component,
    NordFilterPanel3Component,
    NsPadLeftDirective,
    NsPadRightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


