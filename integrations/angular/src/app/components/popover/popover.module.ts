import { BoxService } from './services/box.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';
import { BottomFlipPlacementStrategy } from './strategies/bottom-flip-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: BoxService, useClass: BoxService },
    { provide: BottomPlacementStrategy, useClass: BottomPlacementStrategy },
    { provide: 'PlacementStrategy', useClass: BottomFlipPlacementStrategy, multi: true },
  ]
})
export class PopoverModule { }
