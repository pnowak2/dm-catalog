import { BoxService } from './services/box.service';
import { IntersectionCorrectionPlacementStrategy } from './strategies/intersection-correction-strategy';
import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';

import { PlacementStrategy, Box } from './services/interfaces';
import { HtmlElementBox } from './models/html-element-box';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = "Test title";

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'left';

  constructor(
    @Inject('PlacementStrategy')
    private placementStrategies: [PlacementStrategy],
    private boxService: BoxService) { }

  show(event) {
    const triggerBox: Box = HtmlElementBox.create(event.target);
    const popoverBox: Box = HtmlElementBox.create(this.popoverContainer.nativeElement);
    const placementStrategy: PlacementStrategy = new IntersectionCorrectionPlacementStrategy(
      this.pickPlacementStrategy(
        this.placementStrategies,
        this.placement
      ),
      this.boxService
    );

    popoverBox.position = placementStrategy.calculatePosition(
      triggerBox,
      popoverBox
    );
  }

  pickPlacementStrategy(
    placementStrategies: [PlacementStrategy],
    placement: string): PlacementStrategy {

    return placementStrategies.find(
      strategy => strategy.getId() === placement
    );
  }
}
