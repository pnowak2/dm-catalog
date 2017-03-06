import { FamilyCompositionModule } from './components/family-composition/family-composition.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavstackComponent } from './components/navstack/navstack.component';
import { FamilyBarDemoComponent } from './catalog/family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './catalog/buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './catalog/navstack-demo/navstack-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyBarDemoComponent,
    ButtonsDemoComponent,
    NavstackComponent,
    NavstackDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FamilyCompositionModule,
    RouterModule.forRoot([
      { path: 'demo/family-bar', component: FamilyBarDemoComponent },
      { path: 'demo/buttons', component: ButtonsDemoComponent },
      { path: 'demo/navstack', component: NavstackDemoComponent },
    ])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
