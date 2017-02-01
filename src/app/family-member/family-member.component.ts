import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss'],
  host: {
    '(click)': 'onClicked($event)'
  }
})
export class FamilyMemberComponent implements OnInit {
  @Input() active = false;
  @Input() name: string;
  @Output() clicked: EventEmitter<FamilyMemberComponent>;

  constructor() { 
    this.clicked = new EventEmitter<FamilyMemberComponent>();
  }

  ngOnInit() {
  }

  onClicked(evt) {
    this.clicked.next(this);
  }

}
