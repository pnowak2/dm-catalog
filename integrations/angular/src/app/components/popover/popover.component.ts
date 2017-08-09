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
  @Input() placement: 'top' | 'left' | 'right' | 'bottom' = 'bottom';

  public vm: PopoverVM;

  constructor(private popoverService: PopoverService) {
    this.vm = PopoverVM.create();
  }

  show(event) {
    const anchorRect: Rectangle = RectangleFactory.fromHtmlElement(event.target);
    const elementRect: Rectangle = RectangleFactory.fromHtmlElement(this.popoverEl.nativeElement);
    const arrowRect: Rectangle = RectangleFactory.fromHtmlElement(this.arrowEl.nativeElement);

    this.vm = this.popoverService.calculate(
      this.placement,
      anchorRect,
      elementRect,
      arrowRect
    );
  }
}
