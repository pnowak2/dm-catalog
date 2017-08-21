import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';

import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from './../directives/directives.module';

import { NavstackDemoComponent } from './navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { MainLayoutDemoComponent } from './layouts/main/main-layout-demo.component';
import { MediaDemoComponent } from './media-demo/media-demo.component';
import { ColorSystemDemoComponent } from './color-system-demo/color-system-demo.component';
import { HtmlDefaultsDemoComponent } from './html-defaults-demo/html-defaults-demo.component';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
import { UtilitiesDemoComponent } from './utilities-demo/utilities-demo.component';
import { BordersDemoComponent } from './utilities-demo/borders-demo/borders-demo.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    CatalogComponent,
    TypographyDemoComponent,
    NavstackDemoComponent,
    SidebarDemoComponent,
    SwitchDemoComponent,
    MainLayoutDemoComponent,
    MediaDemoComponent,
    ColorSystemDemoComponent,
    HtmlDefaultsDemoComponent,
    PopoverDemoComponent,
    UtilitiesDemoComponent,
    BordersDemoComponent,
    TabsDemoComponent
  ],
  providers: [],
  exports: []
})
export class CatalogModule { }
