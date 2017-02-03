import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asm-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click')
  onClicked() {
    this.checked = !this.checked;
    this.toggle.emit(this.checked);
  }

}
