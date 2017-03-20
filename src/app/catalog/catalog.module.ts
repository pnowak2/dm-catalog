
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';

import { ComponentsModule } from '../components/components.module';

import { FamilyBarDemoComponent } from './family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { IconsDemoComponent } from './icons-demo/icons-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { MainLayoutDemoComponent } from './layouts/main/main-layout-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ComponentsModule
  ],
  declarations: [
    CatalogComponent,
    TypographyDemoComponent,
    ButtonsDemoComponent,
    FamilyBarDemoComponent,
    CardDemoComponent,
    NavstackDemoComponent,
    IconsDemoComponent,
    SidebarDemoComponent,
    SwitchDemoComponent,
    MainLayoutDemoComponent
  ],
  providers: [],
  exports: []
})
export class CatalogModule { }
