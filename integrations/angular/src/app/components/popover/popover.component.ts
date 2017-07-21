import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';

import { PlacementStrategy, Rectangle } from './interfaces/interfaces';
import { HtmlElementBox } from './models/html-element-box';

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
    @Inject('PlacementStrategy')
    private placementStrategies: [PlacementStrategy]) { }

  show(event) {
    const triggerBox: Rectangle = HtmlElementBox.create(event.target);
    const popoverBox: Rectangle = HtmlElementBox.create(this.popoverContainer.nativeElement);

    const placementStrategy: PlacementStrategy = this.pickPlacementStrategy(
      this.placementStrategies,
      this.placement
    );

    const placement: Rectangle = placementStrategy.calculate(
      triggerBox,
      popoverBox
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
