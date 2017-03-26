import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
