import { RectangleService } from './services/rectangle.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';
import { RightPlacementStrategy } from './strategies/right-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: RectangleService, useClass: RectangleService },
    { provide: 'PlacementStrategy', useClass: BottomPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: RightPlacementStrategy, multi: true },
  ]
})
export class PopoverModule { }
