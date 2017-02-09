import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent {
  @Input() familyMembers: [FamilyMemberViewModel];
}
