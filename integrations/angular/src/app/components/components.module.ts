import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FamilyCompositionModule } from './family-composition/family-composition.module';
import { NavigationModule } from './navigation/navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SwitchModule } from './switch/switch.module';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [],
  exports: [
    FamilyCompositionModule,
    NavigationModule,
    SidebarModule,
    SwitchModule,
    PopoverModule
  ]
})
export class ComponentsModule { }
