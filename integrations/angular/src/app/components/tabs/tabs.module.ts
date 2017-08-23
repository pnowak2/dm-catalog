import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabsService } from './services/tabs.service';

@NgModule({
  imports: [CommonModule],
  exports: [TabsComponent, TabComponent, TabItemComponent],
  declarations: [TabsComponent, TabComponent, TabItemComponent],
  providers: [{
    provide: TabsService, useClass: TabsService
  }]
})
export class TabsModule { }
