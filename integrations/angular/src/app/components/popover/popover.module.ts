import { BoxService } from './services/box.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';

import { TopPlacementStrategy } from './strategies/top-placement-strategy';
import { LeftPlacementStrategy } from './strategies/left-placement-strategy';
import { LeftFlipPlacementStrategy } from './strategies/left-flip-placement-strategy';
import { RightPlacementStrategy } from './strategies/right-placement-strategy';
import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';
import { BottomFlipPlacementStrategy } from './strategies/bottom-flip-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: BoxService, useClass: BoxService },
    { provide: TopPlacementStrategy, useClass: TopPlacementStrategy },
    { provide: BottomPlacementStrategy, useClass: BottomPlacementStrategy },
    { provide: LeftPlacementStrategy, useClass: LeftPlacementStrategy },
    { provide: RightPlacementStrategy, useClass: RightPlacementStrategy },
    { provide: 'PlacementStrategy', useClass: TopPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: BottomFlipPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: LeftFlipPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: RightPlacementStrategy, multi: true }
  ]
})
export class PopoverModule { }
