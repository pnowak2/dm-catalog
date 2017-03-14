import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyCompositionModule } from './family-composition/family-composition.module';

@NgModule({
  imports: [
    CommonModule,
    FamilyCompositionModule
  ],
  declarations: [],
  providers: [],
  exports: [FamilyCompositionModule]
})
export class ComponentsModule { }
