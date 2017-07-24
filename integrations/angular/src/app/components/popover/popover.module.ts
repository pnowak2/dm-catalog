import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: []
})
export class PopoverModule { }
