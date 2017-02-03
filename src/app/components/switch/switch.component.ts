import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'asm-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onClicked() {
    this.checked = !this.checked;
  }

}
