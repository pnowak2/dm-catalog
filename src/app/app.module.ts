import { FamilyCompositionModule } from './components/family-composition/family-composition.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavstackComponent } from './components/navstack/navstack.component';
import { FamilyBarDemoComponent } from './catalog/family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './catalog/buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './catalog/navstack-demo/navstack-demo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarDemoComponent } from './catalog/sidebar-demo/sidebar-demo.component';
import { NavItemComponent } from './components/navstack/nav-item/nav-item.component';
import { NavCategoryComponent } from './components/navstack/nav-category/nav-category.component';
import { NavDividerComponent } from './components/navstack/nav-divider/nav-divider.component';
import { NavSubitemsComponent } from './components/navstack/nav-subitems/nav-subitems.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyBarDemoComponent,
    ButtonsDemoComponent,
    NavstackComponent,
    NavstackDemoComponent,
    SidebarComponent,
    SidebarDemoComponent,
    NavItemComponent,
    NavCategoryComponent,
    NavDividerComponent,
    NavSubitemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FamilyCompositionModule,
    RouterModule.forRoot([
      { path: 'demo/family-bar', component: FamilyBarDemoComponent },
      { path: 'demo/buttons', component: ButtonsDemoComponent },
      { path: 'demo/navstack', component: NavstackDemoComponent },
      { path: 'demo/sidebar', component: SidebarDemoComponent },
    ])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
