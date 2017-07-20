import { PopoverService } from './popover.service';
import { PopoverComponent } from './popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [{provide: 'positionImpl', useClass: PopoverService}]
})
export class PopoverModule { }
