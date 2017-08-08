import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverService } from './services/popover.service';
import { GeometryModule } from './../../shared/geometry/geometry.module';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, GeometryModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [PopoverService]
})
export class PopoverModule { }
