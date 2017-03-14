import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavCategoryComponent } from './nav-category/nav-category.component';
import { NavDividerComponent } from './nav-divider/nav-divider.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavstackComponent } from './nav-stack/navstack.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavCategoryComponent,
    NavDividerComponent,
    NavItemComponent,
    NavstackComponent
  ],
  declarations: [
    NavCategoryComponent,
    NavDividerComponent,
    NavItemComponent,
    NavstackComponent
  ]
})
export class NavStackModule { }
