import { SwitchComponent } from './../../switch/switch.component';
import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'asm-family-bar',
  templateUrl: './family-bar.component.html',
  styleUrls: ['./family-bar.component.scss']
})
export class FamilyBarComponent {
  @ViewChild(SwitchComponent) sw: SwitchComponent;
  @ViewChild('scroll') sl: ElementRef;
  @Input() familyMembers: Array<FamilyMemberViewModel> = [];

  get selectedMember(): FamilyMemberViewModel {
    return this.familyMembers.find(member => member.selected);
  }

  get members(): Array<FamilyMemberViewModel> {
    if(this.sw.checked) {
      return this.familyMembers;
    } else {
      return this.familyMembers.filter(m => {
        return m.accidentCoverage || m.sicknessCoverage;
      });
    }
  }

  clicked(member: FamilyMemberViewModel) {
    this.familyMembers.forEach(f => f.selected = false);
    member.selected = true;
  }

  sld() {
    this.sl.nativeElement.scrollLeft += 15;
  }

  sla() {
    this.sl.nativeElement.scrollLeft -= 15;
  }
}
