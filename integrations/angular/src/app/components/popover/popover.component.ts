import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { Rectangle } from './../../shared/coordinates/interfaces/rectangle';
import { RectangleFactory } from './../../shared/coordinates/factory/rectangle-factory';
import { POSITION_SERVICE } from './../../shared/coordinates/coordinates.config';
import { PositionService } from './../../shared/coordinates/services/position/position.service';
import { inside } from '../../shared/coordinates/services/positioner/test';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = 'Test title';

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'bottom';

  constructor(
    @Inject(POSITION_SERVICE)
    private positionService: PositionService) {
    const inputRect: Rectangle = {
      position: {
        x: 0,
        y: 0
      },
      dimensions: {
        width: 0,
        height: 0
      }
    }

    const r = inside.calculate(inputRect, inputRect)

    console.log('result', r);

  }

  show(event) {
    const popoverContainer: HTMLElement = this.popoverContainer.nativeElement;
    const triggerRectangle: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const popoverRectangle: Rectangle = RectangleFactory.fromHtmlElement(popoverContainer);

    const placementRectangle: Rectangle = this.positionService.position(
      triggerRectangle,
      popoverRectangle,
      this.placement
    );

    this.updatePlacement(
      popoverContainer,
      placementRectangle
    );
  }

  updatePlacement(popover: HTMLElement, rect: Rectangle) {
    popover.style.left = rect.position.x + 'px';
    popover.style.top = rect.position.y + 'px';
    popover.style.height = rect.dimensions.height + 'px';
    popover.style.width = rect.dimensions.width + 'px';
  }
}
