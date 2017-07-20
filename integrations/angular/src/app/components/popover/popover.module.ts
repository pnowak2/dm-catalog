import { BoxService } from './services/box.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: BoxService, useClass: BoxService },
    { provide: 'PlacementStrategy', useClass: BottomPlacementStrategy, multi: true },
  ]
})
export class PopoverModule { }
