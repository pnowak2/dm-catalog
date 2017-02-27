import { Component, OnInit } from '@angular/core';
import { FamilyMemberModel, CoverageType, Gender } from '../../components/family-composition/model/family-member.model';

@Component({
  selector: 'asm-family-bar-demo',
  templateUrl: './family-bar-demo.component.html',
  styleUrls: ['./family-bar-demo.component.css']
})
export class FamilyBarDemoComponent implements OnInit {
  familyMember: FamilyMemberModel = {
    firstName: 'Piotr',
    familyName: 'Bardzo Długa Nazwa Że Aż Szok',
    personalNumber: '123456',
    relationName: 'spouse',
    isExrelation: true,
    accidentCoverage: CoverageType.Full,
    sicknessCoverage: CoverageType.Complementary,
    sicknessCoverageDateFrom: new Date(1980, 4, 28),
    sicknessCoverageDateTo: new Date(1986, 9, 3),
    birthDate: new Date(1980, 4, 28),
    mainLanguage: 'pol',
    languages: ['Polish', 'Greek'],
    delegationCountry: 'bel',
    hasComments: true
  };

  familyMembers: Array<FamilyMemberModel> = [{
    firstName: 'Piotr',
    familyName: 'Bardzo Długa Nazwa Że Aż Szok',
    personalNumber: '123456',
    relationName: 'spouse',
    isExrelation: true,
    accidentCoverage: CoverageType.Full,
    sicknessCoverage: CoverageType.Complementary,
    sicknessCoverageDateFrom: new Date(1980, 4, 28),
    sicknessCoverageDateTo: new Date(1986, 9, 3),
    birthDate: new Date(1980, 4, 28),
    mainLanguage: 'pol',
    languages: ['Polish', 'Greek'],
    delegationCountry: 'bel',
    coveredByOtherAffiliate: true
  }, {
    firstName: 'Andrzej',
    familyName: 'Poniedzielski',
    personalNumber: '256002',
    coveredByOtherAffiliate: true,
    accidentCoverageDateTo: new Date(),
    birthDate: new Date(1980, 4, 28),
    deathDate: new Date(1980, 4, 28),
    gender: Gender.Male
  }, {
    firstName: 'Roman',
    disabled: true
  }];
  constructor() { }

  ngOnInit() {
  }

}
