// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { AppComponent } from './app.component';
import { NasaService } from './nasa.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    CommonModule,
    DatepickerModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
