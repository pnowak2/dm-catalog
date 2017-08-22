import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [TabsComponent, TabItemComponent],
  declarations: [TabsComponent, TabComponent, TabItemComponent]
})
export class TabsModule { }
