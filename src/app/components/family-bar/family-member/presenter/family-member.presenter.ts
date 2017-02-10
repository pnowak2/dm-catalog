import { FamilyMemberModel } from './../model/family-member.model';
class FamilyMemberPresenter {
  view: FamilyMemberView;

  set familyMember(model: FamilyMemberModel) {
    this.view.vm = this.createViewModel(model);
  }

  createViewModel(model): {

  }

  scrollClicked(id: string) {
    
  }

  save(data: any) {
    this.service.save(data);
  }
}