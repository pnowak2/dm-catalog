import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FamilyCompositionContainerComponent } from './family-composition-container/family-composition-container.component';
import { FamilyMemberComponent } from './family-member/family-member.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyCompositionContainerComponent,
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
