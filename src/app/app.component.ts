import { Component, HostListener } from '@angular/core';
import { FamilyMemberViewModel, Coverage, Sex } from './components/family-bar/family-member/model/family-member.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMembers: Array<FamilyMemberViewModel> = [{
    firstName: 'Piotr',
    familyName: 'Bardzo Długa Nazwa Że Aż Szok',
    personalNumber: '123456',
    accidentCoverage: Coverage.Full,
    sicknessCoverage: Coverage.Complementary,
    birthDate: '28/05/1980'
  }, {
    firstName: 'Andrzej',
    familyName: 'Poniedzielski',
    personalNumber: '256002',
    coveredByOtherAffiliate: true,
    birthDate: '12/10/1964',
    deathDate: '01/07/2004',
    sex: Sex.Male
  }, {
    firstName: 'Roman'
  }];

  md: Date = new Date();
  title: 'app works!';

  familyMemberSelected(member: FamilyMemberViewModel) {
    // console.log('selected: ', member);
  }
}
