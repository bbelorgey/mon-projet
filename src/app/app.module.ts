import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareil.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
