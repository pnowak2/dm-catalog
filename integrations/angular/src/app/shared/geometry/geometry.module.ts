import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionService } from './services/position/position.service';
import { BottomPlacementStrategy } from './services/position/strategies/bottom-placement-strategy';
import { RightPlacementStrategy } from './services/position/strategies/right-placement-strategy';
import { BottomRightPlacementStrategy } from './services/position/strategies/bottom-right-placement-strategy';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: PositionService, useFactory: () => {
        return new PositionService(
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
