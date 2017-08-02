import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementService } from './services/placement/placement.service';
import { LeftPlacementStrategy } from './services/placement/strategies/left-placement.strategy';
import { TopPlacementStrategy } from './services/placement/strategies/top-placement.strategy';
import { BottomPlacementStrategy } from './services/placement/strategies/bottom-placement.strategy';
import { RightPlacementStrategy } from './services/placement/strategies/right-placement.strategy';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: PlacementService, useFactory: () => {
        return new PlacementService(
          [
            new LeftPlacementStrategy(),
            new TopPlacementStrategy(),
            new BottomPlacementStrategy(),
            new RightPlacementStrategy(),
          ]
        )
      }
    },
  ]
})
export class GeometryModule { }
