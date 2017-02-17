import { SwitchComponent } from './../../switch/switch.component';
import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyBarComponent {
  @ViewChild('familyMembersScrollContainer') familyMembersScrollContainer: ElementRef;
  @ViewChild(SwitchComponent) familyPlusSwitch: SwitchComponent;
  @Output() memberSelected = new EventEmitter<FamilyMemberViewModel>();
  @Input() familyMembers: Array<FamilyMemberViewModel> = [];
  @Input() closed = false;
  @Input() readOnly = false;

  constructor(private renderer: Renderer) { }

  get ScrollStep(): number {
    return 80;
  }

  get familyBarMembers(): Array<FamilyMemberViewModel> {
    if (this.familyPlusSwitch.checked) {
      return this.familyMembers;
    } else {
      return this.familyMembersWithCoverage;
    }
  }

  get familyMembersWithCoverage(): Array<FamilyMemberViewModel> {
    return this.familyMembers.filter(member => {
      return member.accidentCoverage || member.sicknessCoverage;
    });
  }

  get familySize(): number {
    return this.familyMembers.length;
  }

  get familyCoveredSize(): number {
    return this.familyMembersWithCoverage.length;
  }

  get selectedMember(): FamilyMemberViewModel {
    return this.familyMembers.find(member => member.selected);
  }

  handleMemberClicked(member: FamilyMemberViewModel) {
    if (this.readOnly) {
      return;
    };

    this.familyMembers.forEach(m => m.selected = false);
    member.selected = true;
    this.memberSelected.next(member);
  }

  handleTabClicked() {
    this.closed = !this.closed;
  }

  handleScrollLeftClicked(evt) {
    const currentPosition = this.familyMembersScrollContainer.nativeElement.scrollLeft;

    this.renderer.setElementProperty(
      this.familyMembersScrollContainer.nativeElement,
      'scrollLeft',
      currentPosition - this.ScrollStep
    );

    evt.stopPropagation();
  }

  handleScrollRightClicked(evt) {
    const currentPosition = this.familyMembersScrollContainer.nativeElement.scrollLeft;

    this.renderer.setElementProperty(
      this.familyMembersScrollContainer.nativeElement,
      'scrollLeft',
      currentPosition + this.ScrollStep
    );

    evt.stopPropagation();
  }
}
