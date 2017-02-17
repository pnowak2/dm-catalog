import { FamilyCompositionModule } from './components/family-composition/family-composition.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FamilyCompositionModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
