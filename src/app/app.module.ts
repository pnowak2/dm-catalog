import { FamilyCompositionModule } from './components/family-composition/family-composition.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FamilyBarDemoComponent } from './catalog/family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './catalog/buttons-demo/buttons-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyBarDemoComponent,
    ButtonsDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FamilyCompositionModule,
    RouterModule.forRoot([
      { path: 'demo/family-bar', component: FamilyBarDemoComponent },
      { path: 'demo/buttons', component: ButtonsDemoComponent }
    ])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
