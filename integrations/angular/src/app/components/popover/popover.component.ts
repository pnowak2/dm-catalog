import { PopoverService } from './services/popover.service';
import { PopoverVM } from './viewmodel/popover.viewmodel';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Rectangle } from './../../shared/geometry/model/rectangle';
import { RectangleFactory } from './../../shared/geometry/factory/rectangle-factory';
import { PlacementService } from './../../shared/geometry/services/placement/placement.service';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverEl: ElementRef;
  @ViewChild('arrow') arrowEl: ElementRef;

  @Input() title = 'Test title';
  @Input() styleClass = '';
  @Input() flavour = 'dm-c-popover--default';
  @Input() placement: 'top' | 'left' | 'right' | 'bottom' = 'bottom';

  public vm: PopoverVM;

  constructor(private popoverService: PopoverService) {
    this.vm = PopoverVM.create();
  }

  show(event) {
    const anchorRect: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const popoverRect: Rectangle = RectangleFactory.fromHtmlElement(this.popoverEl.nativeElement);
    const arrowRect: Rectangle = RectangleFactory.fromHtmlElement(this.arrowEl.nativeElement);
    const placement = this.placement;

    this.vm = this.popoverService.calculate({
      placement,
      anchorRect,
      popoverRect,
      arrowRect
    });
  }
}
