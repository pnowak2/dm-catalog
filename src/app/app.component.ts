import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMember: FamilyMemberViewModel = {};

  md: Date = new Date();
  title: 'app works!';

  constructor() {

  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    // this.familyMember.disabled = !this.familyMember.disabled;
    // this.familyMember.selected = !this.familyMember.selected;
    // this.familyMember.coveredByOtherAffiliate = !this.familyMember.coveredByOtherAffiliate;
    // this.familyMember.sicknessCoverage = Coverage.Full;
    // this.familyMember.language = null;
    // this.familyMember.country = null;
    // this.familyMember.hasComments = false;
  }

}
