import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { MenuModule } from '../menu/menu/menu.module';
import { MenuItemModule } from './../menu/menu-item/menu-item.module';
import { MenuHeaderModule } from './../menu/menu-header/menu-header.module';
import { MenuSeparatorModule } from './../menu/menu-separator/menu-separator.module';

@NgModule({
  imports: [CommonModule, MenuModule, MenuItemModule, MenuHeaderModule, MenuSeparatorModule],
  exports: [AutocompleteComponent],
  declarations: [AutocompleteComponent]
})
export class AutoCompleteModule { }
