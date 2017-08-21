import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [CommonModule],
  exports: [TabsComponent, TabComponent],
  declarations: [TabsComponent, TabComponent]
})
export class TabsModule { }
