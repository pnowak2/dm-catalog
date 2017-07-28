import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Rectangle } from './../../shared/geometry/model/rectangle';
import { RectangleFactory } from './../../shared/geometry/factory/rectangle-factory';
import { PositionService } from './../../shared/geometry/services/position/position.service';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = 'Test title';

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'bottom';

  constructor(private positionService: PositionService) { }

  show(event) {
    const popoverContainer: HTMLElement = this.popoverContainer.nativeElement;
    const anchorRect: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const elementRect: Rectangle = RectangleFactory.fromHtmlElement(popoverContainer);
    const windowRect: Rectangle = RectangleFactory.fromWindow();

    const popoverRect: Rectangle = this.positionService.position(
      anchorRect,
      elementRect,
      {
        placement: this.placement,
        parent: windowRect,
        constrainToParent: true,
        flip: true
      }
    );

    this.updatePlacement(
      popoverContainer,
      popoverRect
    );
  }

  updatePlacement(popover: HTMLElement, rect: Rectangle) {
    popover.style.left = rect.x + 'px';
    popover.style.top = rect.y + 'px';
    popover.style.height = rect.height + 'px';
    popover.style.width = rect.width + 'px';
  }
}
