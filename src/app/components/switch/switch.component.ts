import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click')
  handleClicked() {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
  }

}
