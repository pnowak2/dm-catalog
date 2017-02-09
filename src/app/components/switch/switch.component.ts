import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asm-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click')
  clicked() {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
  }

}
