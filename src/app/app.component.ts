import { Component } from '@angular/core';
import { FamilyMemberComponent } from './family-member/family-member.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  members: Array<string>;

  constructor() {
    this.members = ['Piotr', 'Andrzej', 'Rafał']
  }

  tabClicked(tab: FamilyMemberComponent) {
    console.log(tab.name);
  }
}
