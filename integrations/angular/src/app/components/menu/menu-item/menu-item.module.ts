import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [MenuItemComponent],
  declarations: [MenuItemComponent]
})
export class MenuItemModule { }
