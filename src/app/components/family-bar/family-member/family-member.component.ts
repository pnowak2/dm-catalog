import { Component, Input } from '@angular/core';
import { FamilyMemberViewModel, SicknessCoverage } from './model/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent  {
  @Input() public familyMember: FamilyMemberViewModel = {};

  hasSicknessComplementaryRights(familyMember: FamilyMemberViewModel) {
    return familyMember.sicknessCoverage === SicknessCoverage.Complementary;
  }

  hasSicknessFullRights(familyMember: FamilyMemberViewModel) {
    return familyMember.sicknessCoverage === SicknessCoverage.Full;
  }
}
