import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

import { TopPlacementStrategy } from './strategies/top-placement-strategy';
import { LeftPlacementStrategy } from './strategies/left-placement-strategy';
import { RightPlacementStrategy } from './strategies/right-placement-strategy';
import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: 'PlacementStrategy', useValue: new TopPlacementStrategy(), multi: true },
    { provide: 'PlacementStrategy', useValue: new BottomPlacementStrategy(), multi: true },
    { provide: 'PlacementStrategy', useValue: new LeftPlacementStrategy(), multi: true },
    { provide: 'PlacementStrategy', useValue: new RightPlacementStrategy(), multi: true },
  ]
})
export class PopoverModule { }
