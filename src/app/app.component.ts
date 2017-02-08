import { Component, HostListener } from '@angular/core';
import { FamilyMemberViewModel, Coverage, Sex } from './components/family-bar/family-member/model/family-member.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  familyMember: FamilyMemberViewModel = new FamilyMemberViewModel();
  
  md: Date = new Date();
  title: 'app works!';

  constructor() {
    this.familyMember.firstName = 'Piotr';
    this.familyMember.familyName = 'Nowak';
    this.familyMember.language = 'pol';
    this.familyMember.sex = Sex.Male;
    this.familyMember.birthDate = new Date();
    this.familyMember.deathDate = new Date();
    this.familyMember.country = 'BEL';
    this.familyMember.disabled = true;
    this.familyMember.personalNumber = '346001';
    this.familyMember.relationName = 'Affiliate';
    this.familyMember.selected = true;
    this.familyMember.hasComments = true;
    this.familyMember.coveredByOtherAffiliate = true;
    this.familyMember.accidentCoverage = Coverage.Full;
    this.familyMember.sicknessCoverage = Coverage.Complementary;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.familyMember.disabled = !this.familyMember.disabled;
    this.familyMember.selected = !this.familyMember.selected;
    this.familyMember.coveredByOtherAffiliate = !this.familyMember.coveredByOtherAffiliate;
    this.familyMember.sicknessCoverage = Coverage.Full;
    this.familyMember.language = null;
    this.familyMember.country = null;
    this.familyMember.hasComments = false;
  }

}
