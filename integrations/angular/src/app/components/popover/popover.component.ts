import { BoxService } from './services/box.service';
import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';

import { PlacementStrategy, Rectangle } from './services/interfaces';
import { HtmlElementBox } from './models/html-element-box';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = "Test title";

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'bottom';

  constructor(
    @Inject('PlacementStrategy')
    private placementStrategies: [PlacementStrategy],
    private boxService: BoxService) { }

  show(event) {
    const triggerBox: Rectangle = HtmlElementBox.create(event.target);
    const popoverBox: Rectangle = HtmlElementBox.create(this.popoverContainer.nativeElement);

    const placementStrategy: PlacementStrategy = this.pickPlacementStrategy(
      this.placementStrategies,
      this.placement
    )

    const placement: Rectangle = placementStrategy.calculate(
      triggerBox,
      popoverBox
    );

    this.popoverContainer.nativeElement.style.left = placement.position.left + 'px';
    this.popoverContainer.nativeElement.style.top = placement.position.top + 'px';
    this.popoverContainer.nativeElement.style.height = placement.dimensions.height + 'px';
    this.popoverContainer.nativeElement.style.width = placement.dimensions.width + 'px';
  }

  pickPlacementStrategy(
    placementStrategies: [PlacementStrategy],
    placement: string): PlacementStrategy {

    return placementStrategies.find(
      strategy => strategy.getId() === placement
    );
  }
}
