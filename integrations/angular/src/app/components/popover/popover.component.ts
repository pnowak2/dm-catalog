import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';

import { PlacementStrategy, Box } from './services/interfaces';
import { RightPlacementStrategy } from './strategies/right-placement-strategy';
import { LeftPlacementStrategy } from './strategies/left-placement-strategy';
import { BottomPlacementStrategy } from './strategies/bottom-placement-strategy';
import { TopPlacementStrategy } from './strategies/top-placement-strategy';

import { HtmlBox } from './models/html-box';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = "Test title";

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' = 'right';

  constructor(@Inject('PlacementStrategy') private placementStrategies: [PlacementStrategy]) { }

  show(event) {
    const placementStrategy: PlacementStrategy = this.placementStrategies.find(s => s.getId() === this.placement);
    const triggerBox: Box = new HtmlBox(event.target);
    const popoverBox: Box = new HtmlBox(this.popoverContainer.nativeElement);

    popoverBox.position = placementStrategy.calculatePosition(triggerBox, popoverBox);
  }
}
