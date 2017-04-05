import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { ColorSystemDemoComponent } from './color-system-demo/color-system-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { MediaDemoComponent } from './media-demo/media-demo.component';
import { FamilyBarDemoComponent } from './family-bar-demo/family-bar-demo.component';
import { NavstackDemoComponent } from './navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './sidebar-demo/sidebar-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { MainLayoutDemoComponent } from './layouts/main/main-layout-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog/typography', pathMatch: 'full' },
  {
    path: 'catalog', component: CatalogComponent, children: [
      { path: 'color-system', component: ColorSystemDemoComponent },
      { path: 'typography', component: TypographyDemoComponent },
      { path: 'media', component: MediaDemoComponent },
      { path: 'switch', component: SwitchDemoComponent },
      { path: 'family-bar', component: FamilyBarDemoComponent },
      { path: 'navstack', component: NavstackDemoComponent },
      { path: 'sidebar', component: SidebarDemoComponent },
      { path: 'layout', component: MainLayoutDemoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }