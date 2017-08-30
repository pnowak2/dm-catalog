import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from './navigation/navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SwitchModule } from './switch/switch.module';
import { PopoverModule } from './popover/popover.module';
import { MenuItemModule } from './menu/menu-item/menu-item.module';
import { MenuModule } from './menu/menu/menu.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [],
  exports: [
    NavigationModule,
    SidebarModule,
    SwitchModule,
    PopoverModule,
    MenuItemModule,
    MenuModule
  ]
})
export class ComponentsModule { }
