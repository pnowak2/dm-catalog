import { HtmlBox } from './models/html-box';
import { Box } from './services/interfaces';
import { PositionService } from './services/position.service';
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html',
  providers: [PositionService]
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = "Test title";

  @Input() placement = 'center top center bottom';

  constructor(private el: ElementRef, private positionService: PositionService) { }

  show(event) {
    const trigger: HTMLElement = event.target;
    const popover: HTMLElement = this.popoverContainer.nativeElement;

    const position = this.positionService.calculatePosition(
      this.placement,
      new HtmlBox(trigger),
      new HtmlBox(popover)
    );

    popover.style.left = position.left + 'px';
    popover.style.top = position.top + 'px';
  }

}
