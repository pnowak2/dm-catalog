import { PopoverService } from './services/popover.service';
import { Popover } from './model/popover.model';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Rectangle } from './../../shared/geometry/model/rectangle';
import { RectangleFactory } from './../../shared/geometry/factory/rectangle-factory';
import { PlacementService } from './../../shared/geometry/services/placement/placement.service';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @Input() title = 'Test title';

  @Input() placement: 'top' | 'left' | 'right' | 'bottom' = 'bottom';

  public popoverModel: Popover = {
    effectivePlacement: 'top',
    arrow: {
      top: '0px',
      left: '0px'
    },
    container: {
      top: '0px',
      left: '0px'
    }
  };

  constructor(private popoverService: PopoverService) { }

  show(event) {
    const popoverEl: HTMLElement = this.popoverContainer.nativeElement;
    const anchorRect: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const elementRect: Rectangle = RectangleFactory.fromHtmlElement(popoverEl);

    this.popoverModel = this.popoverService.calculate(
      anchorRect,
      elementRect,
      this.placement
    );
  }
}
