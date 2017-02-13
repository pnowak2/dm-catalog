import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent {
  @ViewChild('familyMembersScrollContainer') familyMembersScrollContainer: ElementRef;
  @Output() memberSelected = new EventEmitter<FamilyMemberViewModel>();
  @Input() familyMembers: Array<FamilyMemberViewModel> = [];
  @Input() closed = false;

  get selectedMember(): FamilyMemberViewModel {
    return this.familyMembers.find(member => member.selected);
  }

  handleMemberClicked(member: FamilyMemberViewModel) {
    this.familyMembers.forEach(member => member.selected = false);
    member.selected = true;
    this.memberSelected.next(member);
  }

  handleTabClicked() {
    this.closed = !this.closed;
  }

  handleScrollLeftClicked(evt) {
    evt.stopPropagation();
  }

  handleScrollRightClicked(evt) {
    evt.stopPropagation();
  }
}
