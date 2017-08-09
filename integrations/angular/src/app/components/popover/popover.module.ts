import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeometryModule } from './../../shared/geometry/geometry.module';
import { PlacementService } from './../../shared/geometry/services/placement/placement.service';
import { LeftPlacementStrategy } from './services/strategies/left-placement.strategy';
import { TopPlacementStrategy } from './services/strategies/top-placement.strategy';
import { RightPlacementStrategy } from './services/strategies/right-placement.strategy';
import { BottomPlacementStrategy } from './services/strategies/bottom-placement.strategy';
import { PopoverService } from './services/popover.service';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, GeometryModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    {
      provide: PopoverService,
      useFactory: (placementService: PlacementService) => {
        return new PopoverService(
          [
            new LeftPlacementStrategy(placementService),
            new TopPlacementStrategy(placementService),
            new RightPlacementStrategy(placementService),
            new BottomPlacementStrategy(placementService),
          ]
        );
      },
      deps: [PlacementService]
    }
  ]
})
export class PopoverModule { }
