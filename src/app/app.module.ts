import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FamilyMemberComponent } from './components/family-bar/family-member/family-member.component';
import { FamilyBarComponent } from './components/family-bar/family-bar/family-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    FamilyMemberComponent,
    FamilyBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
