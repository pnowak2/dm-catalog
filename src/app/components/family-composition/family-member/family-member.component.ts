import { DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FamilyMemberModel, CoverageType, Gender } from '../model/family-member.model';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyMemberComponent {
  @Output() customerNumberClick = new EventEmitter<FamilyMemberModel>();
  @Input() familyMember: FamilyMemberModel = {};

  handleCustomerNumberClicked(): void {
    this.customerNumberClick.next(this.familyMember);
  }

  get fullName(): string {
    return [this.familyMember.firstName, this.familyMember.familyName]
      .filter(name => name !== undefined)
      .join(' ');
  }

  get hasSicknessComplementaryRights(): boolean {
    return this.familyMember.sicknessCoverage === CoverageType.Complementary;
  }

  get hasSicknessFullRights(): boolean {
    return this.familyMember.sicknessCoverage === CoverageType.Full;
  }

  get hasAccidentComplementaryRights(): boolean {
    return this.familyMember.accidentCoverage === CoverageType.Complementary;
  }

  get hasAccidentFullRights(): boolean {
    return this.familyMember.accidentCoverage === CoverageType.Full;
  }

  get isMale(): boolean {
    return this.familyMember.gender === Gender.Male;
  }

  get isFemale(): boolean {
    return this.familyMember.gender === Gender.Female;
  }

  get isGenderUnknown(): boolean {
    return this.familyMember.gender === Gender.Unknown || this.familyMember.gender === undefined;
  }
}
