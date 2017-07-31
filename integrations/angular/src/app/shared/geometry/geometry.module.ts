import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementService } from './services/placement/placement.service';
import { BottomPlacementStrategy } from './services/placement/strategies/bottom-placement.strategy';
import { RightPlacementStrategy } from './services/placement/strategies/right-placement.strategy';
import { BottomRightPlacementStrategy } from './services/placement/strategies/bottom-right-placement.strategy';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: PlacementService, useFactory: () => {
        return new PlacementService(
          [
            new BottomPlacementStrategy(),
            new RightPlacementStrategy(),
            new BottomRightPlacementStrategy(),
          ]
        )
      }
    },
  ]
})
export class GeometryModule { }
