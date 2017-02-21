import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePipe } from './pipes/date-range.pipe';
import { SwitchModule } from './../switch/switch.module';
import { FamilyMemberComponent } from './family-member/family-member.component';
import { FamilyBarComponent } from './family-bar/family-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SwitchModule
  ],
  exports: [
    FamilyBarComponent,
    FamilyMemberComponent
  ],
  declarations: [
    FamilyBarComponent,
    FamilyMemberComponent,
    DateRangePipe
  ]
})
export class FamilyCompositionModule { }
