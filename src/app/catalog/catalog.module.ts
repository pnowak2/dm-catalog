
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';

import { ComponentsModule } from '../components/components.module';

import { FamilyBarDemoComponent } from './family-bar-demo/family-bar-demo.component';
import { NavstackDemoComponent } from './navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { MainLayoutDemoComponent } from './layouts/main/main-layout-demo.component';
import { MediaDemoComponent } from './media-demo/media-demo.component';
import { ColorSystemDemoComponent } from './color-system-demo/color-system-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ComponentsModule
  ],
  declarations: [
    CatalogComponent,
    TypographyDemoComponent,
    FamilyBarDemoComponent,
    NavstackDemoComponent,
    SidebarDemoComponent,
    SwitchDemoComponent,
    MainLayoutDemoComponent,
    MediaDemoComponent,
    ColorSystemDemoComponent
  ],
  providers: [],
  exports: []
})
export class CatalogModule { }
