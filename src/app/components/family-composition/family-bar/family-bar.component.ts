import { SwitchComponent } from './../../switch/switch.component';
import { FamilyMemberModel } from '../model/family-member.model';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ux-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyBarComponent {
  @ViewChild('familyMembersScrollContainer') familyMembersScrollContainer: ElementRef;
  @ViewChild(SwitchComponent) familyPlusSwitch: SwitchComponent;
  @Output() memberSelected = new EventEmitter<FamilyMemberModel>();
  @Input() familyMembers: Array<FamilyMemberModel> = [];
  @Input() closed = false;
  @Input() readOnly = false;

  constructor(private renderer: Renderer) { }

  get ScrollStep(): number {
    return 80;
  }

  get familyBarMembers(): Array<FamilyMemberModel> {
    if (this.familyPlusSwitch.checked) {
      return this.familyMembers;
    } else {
      return this.familyMembersWithCoverage;
    }
  }

  get familyMembersWithCoverage(): Array<FamilyMemberModel> {
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

  get selectedMember(): FamilyMemberModel {
    return this.familyMembers.find(member => member.selected);
  }

  handleMemberClicked(member: FamilyMemberModel) {
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
