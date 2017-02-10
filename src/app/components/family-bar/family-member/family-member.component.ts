import { Component, Input } from '@angular/core';
import { FamilyMemberModel, Coverage } from './model/family-member.model';
import { FamilyMemberViewModel } from './viewmodel/family-member.viewmodel';

@Component({
  selector: 'asm-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent implements FamilyMemberView {
  vm: FamilyMemberViewModel;
  presenter: FamilyMemberPresenter;

  constructor() {
    this.presenter.view = this;
  }

  @Input() 
  set familyMember(familyMember: FamilyMemberModel) {
    this.presenter.familyMember = familyMember;
  }

  onScrollClicked(evt) {
    let id = evt.target.id;
    this.presenter.scrollClicked(id);
  }

  onSaveClicked(evt) {
    let data = evt.data;
    this.presenter.save(data);
  }
}
