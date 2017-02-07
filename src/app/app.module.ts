import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FamilyMemberComponent } from './components/family-bar/family-member/family-member.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    FamilyMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
