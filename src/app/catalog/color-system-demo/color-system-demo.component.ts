import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-color-system-demo',
  templateUrl: './color-system-demo.component.html',
  styleUrls: ['./color-system-demo.component.scss']
})
export class ColorSystemDemoComponent implements OnInit {
  colors = [
    'primary', 
    'primary-dark', 
    'primary-darker', 
    'warning', 
    'warning-dark', 
    'warning-darker', 
    'danger',
    'danger-dark',
    'danger-darker',
    'success',
    'success-dark',
    'success-darker',
    'info',
    'info-dark',
    'info-darker',
    'pink',
    'pink-dark',
    'pink-darker',
    'red',
    'red-dark',
    'red-darker',
    'grey',
    'grey-dark',
    'grey-darker',
    'slate',
    'slate-dark',
    'slate-darker',
    ];

  constructor() { }

  ngOnInit() {
  }

}
