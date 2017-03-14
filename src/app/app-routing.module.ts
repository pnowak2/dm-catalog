import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyBarDemoComponent } from './catalog/family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './catalog/buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './catalog/navstack-demo/navstack-demo.component';
import { SidebarDemoComponent } from './catalog/sidebar-demo/sidebar-demo.component';
import { IconsDemoComponent } from './catalog/icons-demo/icons-demo.component';
import { TypographyDemoComponent } from './catalog/typography-demo/typography-demo.component';
import { CardDemoComponent } from './catalog/card-demo/card-demo.component';

export const routes: Routes = [
      { path: 'demo/family-bar', component: FamilyBarDemoComponent },
      { path: 'demo/typography', component: TypographyDemoComponent },
      { path: 'demo/buttons', component: ButtonsDemoComponent },
      { path: 'demo/card', component: CardDemoComponent },
      { path: 'demo/navstack', component: NavstackDemoComponent },
      { path: 'demo/sidebar', component: SidebarDemoComponent },
      { path: 'demo/icons', component: IconsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }