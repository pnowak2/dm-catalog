import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from './navigation/navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SwitchModule } from './switch/switch.module';
import { PopoverModule } from './popover/popover.module';
import { MenuItemModule } from './menu/menu-item/menu-item.module';
import { MenuSeparatorModule } from './menu/menu-separator/menu-separator.module';
import { MenuHeaderModule } from './menu/menu-header/menu-header.module';
import { MenuModule } from './menu/menu/menu.module';
import { AutoCompleteModule } from './autocomplete/autocomplete.module';

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
    MenuSeparatorModule,
    MenuHeaderModule,
    MenuModule,
    AutoCompleteModule
  ]
})
export class ComponentsModule { }
