import { Component, Input } from '@angular/core';
import { FamilyMemberViewModel, Coverage } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent  {
  @Input() public familyMember: FamilyMemberViewModel = {};

  hasSicknessComplementaryRights() {
    return this.familyMember.sicknessCoverage === Coverage.Complementary;
  }

  hasSicknessFullRights() {
    return this.familyMember.sicknessCoverage === Coverage.Full;
  }

  hasAccidentComplementaryRights() {
    return this.familyMember.accidentCoverage === Coverage.Complementary;
  }

  hasAccidentFullRights() {
    return this.familyMember.accidentCoverage === Coverage.Full;
  }
}
