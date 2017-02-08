import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FamilyMemberViewModel, Coverage, Sex } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent {
  @Input() public familyMember: FamilyMemberViewModel = {};

  constructor(private datePipe: DatePipe) { }

  hasSicknessComplementaryRights(): boolean {
    return this.familyMember.sicknessCoverage === Coverage.Complementary;
  }

  hasSicknessFullRights(): boolean {
    return this.familyMember.sicknessCoverage === Coverage.Full;
  }

  hasAccidentComplementaryRights(): boolean {
    return this.familyMember.accidentCoverage === Coverage.Complementary;
  }

  hasAccidentFullRights(): boolean {
    return this.familyMember.accidentCoverage === Coverage.Full;
  }

  isMale(): boolean {
    return this.familyMember.sex === Sex.Male;
  }

  isFemale(): boolean {
    return this.familyMember.sex === Sex.Female;
  }

  isSexUnknown(): boolean {
    return this.familyMember.sex === Sex.Unknown || this.familyMember.sex === undefined;
  }

  getBirthAndDeathDates(): string {
    const birthDate = this.datePipe.transform(this.familyMember.birthDate, 'dd/MM/yyyy');
    const deathDate = this.datePipe.transform(this.familyMember.deathDate, 'dd/MM/yyyy');

    if (birthDate && deathDate) {
      return `${birthDate} - ${deathDate}`;
    } if (!birthDate && deathDate) {
      return `(?) - ${deathDate}`;
    } else if (!birthDate && !deathDate) {
      return `(?) - (?)`;
    } else {
      return birthDate;
    }
  }
}
