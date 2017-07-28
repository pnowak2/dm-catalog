import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLACEMENT_STRATEGY } from './geometry.config';
import { BottomPlacementStrategy } from './services/position/strategies/bottom-placement-strategy';
import { RightPlacementStrategy } from './services/position/strategies/right-placement-strategy';
import { PositionService } from './services/position/position.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    { provide: PositionService, useClass: PositionService },
    { provide: PLACEMENT_STRATEGY, useClass: BottomPlacementStrategy, multi: true },
    { provide: PLACEMENT_STRATEGY, useClass: RightPlacementStrategy, multi: true },
  ]
})
export class GeometryModule { }
