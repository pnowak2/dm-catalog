import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleServiceImpl } from './../../shared/coordinates/services/rectangle/rectangle.service';
import { RightPlacementStrategy } from './../../shared/coordinates/services/rectangle/strategies/right-placement-strategy';
import { BottomPlacementStrategy } from './../../shared/coordinates/services/rectangle/strategies/bottom-placement-strategy';
import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule],
  exports: [PopoverComponent],
  declarations: [PopoverComponent],
  providers: [
    { provide: 'RectangleService', useClass: RectangleServiceImpl },
    { provide: 'PlacementStrategy', useClass: BottomPlacementStrategy, multi: true },
    { provide: 'PlacementStrategy', useClass: RightPlacementStrategy, multi: true },
  ]
})
export class PopoverModule { }
