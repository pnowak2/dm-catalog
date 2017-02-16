import { Component, HostListener } from '@angular/core';
import { FamilyMemberViewModel, CoverageType, Gender } from './components/family-composition/family-member/model/family-member.viewmodel';

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
    relationName: 'spouse',
    isExrelation: true,
    accidentCoverage: CoverageType.Full,
    sicknessCoverage: CoverageType.Complementary,
    birthDate: new Date(1980, 4, 28),
    mainLanguage: 'pol',
    languages: ['Polish', 'Greek'],
    delegationCountry: 'bel'
  }, {
    firstName: 'Andrzej',
    familyName: 'Poniedzielski',
    personalNumber: '256002',
    coveredByOtherAffiliate: true,
    birthDate: new Date(1980, 4, 28),
    deathDate: new Date(1980, 4, 28),
    gender: Gender.Male
  }, {
    firstName: 'Roman',
    disabled: true
  }];

  md: Date = new Date();
  title: 'app works!';
}
