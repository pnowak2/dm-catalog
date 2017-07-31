import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Rectangle } from './../../shared/geometry/model/rectangle';
import { RectangleFactory } from './../../shared/geometry/factory/rectangle-factory';
import { PlacementService } from './../../shared/geometry/services/placement/placement.service';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = 'Test title';

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'bottom';

  constructor(private positionService: PlacementService) { }

  show(event) {
    const popoverContainer: HTMLElement = this.popoverContainer.nativeElement;
    const popoverArrow: HTMLElement = this.popoverArrow.nativeElement;
    const anchorRect: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const elementRect: Rectangle = RectangleFactory.fromHtmlElement(popoverContainer);
    const arrowRect: Rectangle = RectangleFactory.fromHtmlElement(popoverArrow);

    const popoverRect: Rectangle = this.positionService.position(
      anchorRect,
      elementRect, {
        placementId: this.placement,
        offset: 15
      }
    );

    this.updatePlacement(
      popoverContainer,
      popoverRect
    );

    const arp = anchorRect
      .relativePositionTo(popoverRect);

    popoverArrow.style.left = arp.x + arrowRect.width / 2 + 'px';
    // popoverArrow.style.top = arp.y + 'px';
  }

  updatePlacement(popover: HTMLElement, rect: Rectangle) {
    document.body.appendChild(popover);
    popover.style.left = rect.x + 'px';
    popover.style.top = rect.y + 'px';
    popover.style.height = rect.height + 'px';
    popover.style.width = rect.width + 'px';
  }
}
