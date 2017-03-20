import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardModule } from './card/card.module';
import { FamilyCompositionModule } from './family-composition/family-composition.module';
import { IconsModule } from './icons/icons.module';
import { NavigationModule } from './navigation/navigation.module';
import { NavbarModule } from './navbar/navbar.module';
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
    NavigationModule,
    IconsModule,
    SidebarModule,
    SwitchModule,
    NavbarModule
  ]
})
export class ComponentsModule { }
