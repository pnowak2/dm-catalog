import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { POSITION_SERVICE } from './../../shared/coordinates/coordinates.config';
import { PositionService } from './../../shared/coordinates/interfaces/position.service';
import { HtmlElementBox } from './../../shared/coordinates/models/html-element-box';
import { Rectangle } from './../../shared/coordinates/interfaces/rectangle';
import { PlacementStrategy } from './../../shared/coordinates/interfaces/placement.strategy';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = 'Test title';

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'right';

  constructor(
    @Inject(POSITION_SERVICE)
    private positionService: PositionService) { }

  show(event) {
    const triggerBox: Rectangle = HtmlElementBox.create(event.target);
    const popoverBox: Rectangle = HtmlElementBox.create(this.popoverContainer.nativeElement);

    const placement: Rectangle = this.positionService.position(
      triggerBox,
      popoverBox,
      this.placement
    );

    this.updatePlacement(
      this.popoverContainer.nativeElement,
      placement
    );
  }

  pickPlacementStrategy(
    placementStrategies: [PlacementStrategy],
    placement: string): PlacementStrategy {

    return placementStrategies.find(
      strategy => strategy.getId() === placement
    );
  }

  updatePlacement(popover: HTMLElement, rect: Rectangle) {
    popover.style.left = rect.position.left + 'px';
    popover.style.top = rect.position.top + 'px';
    popover.style.height = rect.dimensions.height + 'px';
    popover.style.width = rect.dimensions.width + 'px';
  }
}
