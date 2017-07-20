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

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' | 'top-left' = 'right';

  constructor( @Inject('PlacementStrategy') private placementStrategies: [PlacementStrategy]) { }

  show(event) {
    const triggerBox: Box = new HtmlElementBox(event.target);
    const popoverBox: Box = new HtmlElementBox(this.popoverContainer.nativeElement);

    const placementStrategy: PlacementStrategy = this.placementStrategies.find(
      strategy => strategy.getId() === this.placement
    );

    if (placementStrategy) {
      popoverBox.position = placementStrategy.calculatePosition(triggerBox, popoverBox);
    }

  }
}
