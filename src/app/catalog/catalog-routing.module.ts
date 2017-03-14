import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { ButtonsDemoComponent } from './buttons-demo/buttons-demo.component';
import { FamilyBarDemoComponent } from './family-bar-demo/family-bar-demo.component';

export const routes: Routes = [
  {
    path: 'catalog', component: CatalogComponent, children: [
      { path: 'buttons', component: ButtonsDemoComponent },
      { path: 'family-bar', component: FamilyBarDemoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }