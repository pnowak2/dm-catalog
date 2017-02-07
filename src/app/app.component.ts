import { Component } from '@angular/core';
import { FamilyMemberViewModel, Coverage } from './components/family-bar/family-member/model/family-member.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMember: FamilyMemberViewModel = {
    firstName: 'Piotr',
    familyName: 'Nowak',
    language: 'pol',
    birthDate: new Date(),
    deathDate: new Date(),
    country: 'BEL',
    disabled: true,
    personalNumber: '346001',
    relationName: 'Affiliate',
    selected: true,
    coveredByOtherAffiliate: true,
    accidentCoverage: Coverage.Full,
    sicknessCoverage: Coverage.Complementary
  }
  md: Date = new Date();
  title = 'app works!';
}
