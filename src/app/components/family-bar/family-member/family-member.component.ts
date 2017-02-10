import { Component, Input } from '@angular/core';
import { FamilyMemberModel, Coverage } from './model/family-member.model';
import { FamilyMemberViewModel } from './viewmodel/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent {
  vm: FamilyMemberViewModel;

  @Input() 
  set familyMember(familyMember: FamilyMemberModel) {
    this.vm = new FamilyMemberViewModel(familyMember);
  }
}
