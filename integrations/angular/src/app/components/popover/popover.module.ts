import { TopLeftPlacementStrategy } from './strategies/top-left-placement-strategy';
import { BoxService } from './services/box.service';
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
    { provide: BoxService, useClass: BoxService },
    { provide: 'PlacementStrategy', useClass: TopPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: BottomPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: LeftPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: TopLeftPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: RightPlacementStrategy, multi: true }
  ]
})
export class PopoverModule { }
