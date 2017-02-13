import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent {
  ScrollStep = 80;
  @ViewChild('familyMembersScrollContainer') familyMembersScrollContainer: ElementRef;
  @Output() memberSelected = new EventEmitter<FamilyMemberViewModel>();
  @Input() familyMembers: Array<FamilyMemberViewModel> = [];
  @Input() closed = false;

  constructor(private renderer: Renderer) { }

  get familySize(): number {
    return this.familyMembers.length;
  }

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
    let currentPosition = this.familyMembersScrollContainer.nativeElement.scrollLeft;

    this.renderer.setElementProperty(
      this.familyMembersScrollContainer.nativeElement,
      'scrollLeft',
      currentPosition - this.ScrollStep
    );

    evt.stopPropagation();
  }

  handleScrollRightClicked(evt) {
    let currentPosition = this.familyMembersScrollContainer.nativeElement.scrollLeft;
    
    this.renderer.setElementProperty(
      this.familyMembersScrollContainer.nativeElement,
      'scrollLeft',
      currentPosition + this.ScrollStep
    );

    evt.stopPropagation();
  }
}
