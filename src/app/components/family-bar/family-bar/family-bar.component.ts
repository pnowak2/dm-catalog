import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent {
  @Input() familyMembers: Array<FamilyMemberViewModel> = [];
  @Input() closed = false;

  get selectedMember(): FamilyMemberViewModel {
    return this.familyMembers.find(member => member.selected);
  }

  tabClicked() {
    this.closed = !this.closed;
  }

  scrollLeftClicked(evt) {
    evt.stopPropagation();
  }

  scrollRightClicked(evt) {
    evt.stopPropagation();
  }
}
