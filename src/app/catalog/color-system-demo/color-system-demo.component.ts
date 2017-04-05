import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-color-system-demo',
  templateUrl: './color-system-demo.component.html',
  styleUrls: ['./color-system-demo.component.scss']
})
export class ColorSystemDemoComponent implements OnInit {
  colorTypes = ['primary', 'danger', 'warning', 'success', 'info', 'pink', 'red', 'yellow', 'violet', 'purple', 'indigo', 'blue', 'teal', 'green', 'orange', 'brown', 'grey', 'slate'];
  colorShades = ['-lightester-2', '-lightester', '-lightest', '-lighter', '-light', '', '-dark', '-darker', '-darkest', '-darkester'];
  colors = [];

  constructor() { 
    this.colorTypes.forEach((type) => {
      this.colorShades.forEach((shade) => {
        this.colors.push(type + shade);
      });
    });
  }

  ngOnInit() {
  }

}
