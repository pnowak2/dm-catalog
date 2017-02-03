import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asm-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  private checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
