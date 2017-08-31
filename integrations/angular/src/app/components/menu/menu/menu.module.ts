import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemModule } from './../menu-item/menu-item.module';
import { MenuItemComponent } from './../menu-item/menu-item.component';

@NgModule({
  imports: [CommonModule, MenuItemModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  entryComponents: [MenuItemComponent]
})
export class MenuModule { }
