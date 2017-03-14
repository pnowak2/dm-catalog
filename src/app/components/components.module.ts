import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardModule } from './card/card.module';
import { FamilyCompositionModule } from './family-composition/family-composition.module';
import { IconsModule } from './icons/icons.module';
import { NavStackModule } from './nav-stack/nav-stack.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SwitchModule } from './switch/switch.module';

@NgModule({
  imports: [
    SharedModule
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
