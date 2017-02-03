import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'asm-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onClicked() {
    this.checked = !this.checked;
  }

}
