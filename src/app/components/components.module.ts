import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyCompositionModule } from './family-composition/family-composition.module';
import { CardModule } from './card/card.module';
import { NavStackModule } from './nav-stack/nav-stack.module';
import { IconsModule } from './icons/icons.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SwitchModule } from './switch/switch.module';

@NgModule({
  imports: [
    CommonModule,
    FamilyCompositionModule,
    CardModule
  ],
  declarations: [],
  providers: [],
  exports: [
    FamilyCompositionModule,
    CardModule,
    NavStackModule,
    IconsModule,
    SidebarModule,
    SwitchModule
  ]
})
export class ComponentsModule { }
