import { Component, Input, HostListener } from '@angular/core';
import { FamilyMemberViewModel, Coverage, Sex } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent {
  @Input() public familyMember: FamilyMemberViewModel = {};

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
    const birthDate = this.familyMember.birthDate;
    const deathDate = this.familyMember.deathDate;

    if (birthDate && deathDate) {
      return `${birthDate} - ${deathDate}`;
    } if (!birthDate && deathDate) {
      return `(?) - ${deathDate}`;
    } else if (!birthDate && !deathDate) {
      return `(?)`;
    } else {
      return birthDate;
    }
  }

  clicked(evt) {
    evt.stopPropagation();
    console.log('ckd', evt);
  }
}
