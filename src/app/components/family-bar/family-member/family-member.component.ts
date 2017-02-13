import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FamilyMemberViewModel, Coverage, Sex } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent {
  @Output() customerNumberClick = new EventEmitter<FamilyMemberViewModel>();
  @Input() familyMember: FamilyMemberViewModel = {};

  handleCustomerNumberClicked(): void {
    this.customerNumberClick.next(this.familyMember);
  }

  get hasSicknessComplementaryRights(): boolean {
    return this.familyMember.sicknessCoverage === Coverage.Complementary;
  }

  get hasSicknessFullRights(): boolean {
    return this.familyMember.sicknessCoverage === Coverage.Full;
  }

  get hasAccidentComplementaryRights(): boolean {
    return this.familyMember.accidentCoverage === Coverage.Complementary;
  }

  get hasAccidentFullRights(): boolean {
    return this.familyMember.accidentCoverage === Coverage.Full;
  }

  get isMale(): boolean {
    return this.familyMember.sex === Sex.Male;
  }

  get isFemale(): boolean {
    return this.familyMember.sex === Sex.Female;
  }

  get isSexUnknown(): boolean {
    return this.familyMember.sex === Sex.Unknown || this.familyMember.sex === undefined;
  }
}
