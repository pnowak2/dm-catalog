import { Component, OnInit, Input } from '@angular/core';
import { FamilyMemberViewModel, Sex, Coverage } from '../family-member/model/family-member.viewmodel';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent implements OnInit {
  // @Input() familyMembers: FamilyMemberViewModel[];

  constructor() {
    // this.familyMembers = [
    //   {
    //     firstName: 'Piotr',
    //     familyName: 'Nowak',
    //     birthDate: new Date(1980, 4, 28),
    //     sex: Sex.Male,
    //     personalNumber: '123456',
    //     mainLanguage: 'POL',
    //     selected: true,
    //     relationName: 'Affiliate',
    //     sicknessCoverage: Coverage.Full,
    //     accidentCoverage: Coverage.Complementary
    //   }
    // ]
  }

  ngOnInit() {
  }

}
