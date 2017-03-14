
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { FamilyCompositionModule } from '../components/family-composition/family-composition.module';
import { ComponentsModule } from '../components/components.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FamilyBarDemoComponent } from './family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { IconsDemoComponent } from './icons-demo/icons-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    FamilyBarDemoComponent
  ],
  providers: [],
  exports: []
})
export class CatalogModule { }
