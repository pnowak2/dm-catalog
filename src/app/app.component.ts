import { Component, HostListener } from '@angular/core';
import { FamilyMemberViewModel, CoverageType, Gender } from './components/family-bar/family-member/model/family-member.viewmodel';

@Component({
  selector: 'asm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMembers: Array<FamilyMemberViewModel> = [{
    firstName: 'Piotr',
    familyName: 'Bardzo Długa Nazwa Że Aż Szok',
    personalNumber: '123456',
    accidentCoverage: CoverageType.Full,
    sicknessCoverage: CoverageType.Complementary,
    mainLanguage: 'pol',
    delegationCountry: 'bel',
    birthDate: new Date(1980, 4, 28)
  }, {
    firstName: 'Andrzej',
    familyName: 'Poniedzielski',
    personalNumber: '256002',
    coveredByOtherAffiliate: true,
    accidentCoverage: CoverageType.Full,
    sicknessCoverage: CoverageType.None,
    birthDate: new Date(1980, 4, 28),
    deathDate: new Date(1980, 4, 28),
    gender: Gender.Male,
    mainLanguage: 'bel',

  }, {
    firstName: 'Anna',
    familyName: 'Ulanowska',
    accidentCoverage: CoverageType.None,
    sicknessCoverage: CoverageType.None,
    birthDate: new Date(1980, 4, 28),
    gender: Gender.Female,
    mainLanguage: 'bel',

  }, {
    firstName: 'Roman',
    familyName: 'Kołodko',
    accidentCoverage: CoverageType.None,
    sicknessCoverage: CoverageType.None,
    birthDate: new Date(1980, 4, 28),
    disabled: true,
    gender: Gender.Male,
    mainLanguage: 'bel',
  }];

  md: Date = new Date();
  title: 'app works!';

  familyMemberSelected(member: FamilyMemberViewModel) {
    // console.log('selected: ', member);
  }
}
