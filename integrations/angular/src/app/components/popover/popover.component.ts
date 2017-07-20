import { HtmlBox } from './models/html-box';
import { Box } from './services/interfaces';
import { PositionService } from './services/position.service';
import { Component, Input, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html',
  providers: [PositionService]
})
export class PopoverComponent {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title = "Test title";

  @Input() placement = 'top';

  constructor(private positionService: PositionService) { }

  show(event) {
    const trigger: Box = new HtmlBox(event.target);
    const popover: Box = new HtmlBox(this.popoverContainer.nativeElement);

    const position = this.positionService.calculatePosition(
      this.placement,
      trigger,
      popover
    );

    popover.position = position;

    console.log('exceeds height', popover.position.top + popover.height > document.documentElement.clientHeight);
  }

}
