import { Component, HostListener } from '@angular/core';
import { FamilyMemberViewModel, Coverage, Sex } from './components/family-bar/family-member/model/family-member.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMembers: Array<FamilyMemberViewModel> = [{
    firstName: 'Piotr'
  }];

  md: Date = new Date();
  title: 'app works!';
}
