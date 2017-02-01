import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { FamilyMemberComponent } from '../family-member/family-member.component';

@Component({
  selector: 'app-family-composition-container',
  templateUrl: './family-composition-container.component.html',
  styleUrls: ['./family-composition-container.component.scss']
})
export class FamilyCompositionContainerComponent implements AfterContentInit {
  @Input() opened: boolean;
  @ContentChildren(FamilyMemberComponent) members: QueryList<FamilyMemberComponent>;
  selectedPerson: string;
  membersCount: number;
  
  constructor() { }

  ngAfterContentInit() {
    this.membersCount = this.members.length;
    this.members.toArray().forEach((member: FamilyMemberComponent) => {
      member.clicked.subscribe((m: FamilyMemberComponent) => {
        this.members.toArray().forEach((member: FamilyMemberComponent) => member.active = false);
        m.active = true;
        this.selectedPerson = m.name;
      })
    })
  }

  toggleBar() {
    this.opened = !this.opened;
  }
}
