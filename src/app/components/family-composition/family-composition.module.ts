import { SwitchModule } from './../switch/switch.module';
import { FamilyMemberComponent } from './../family-composition/family-member/family-member.component';
import { FamilyBarComponent } from './../family-composition/family-bar/family-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    FamilyMemberComponent
  ]
})
export class FamilyCompositionModule { }
