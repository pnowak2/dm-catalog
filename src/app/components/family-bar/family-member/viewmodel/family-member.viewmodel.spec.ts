import { FamilyMemberViewModel } from './family-member.viewmodel';
import { FamilyMemberModel, Coverage } from './../model/family-member.model';

describe('Family Member View Model', () => {
  
  it('should return personal number', () => {
    let vm = new FamilyMemberViewModel({
      personalNumber: '123456'
    });

    expect(vm.personalNumber).toEqual('123456');
  });

  it('should return true if coverage is complementary', () => {
    let vm = new FamilyMemberViewModel({
      accidentCoverage: Coverage.Complementary
    });

    expect(vm.hasAccidentComplementaryCoverage).toEqual(true);
    expect(vm.hasAccidentFullCoverage).toEqual(false);
  });
    
  it('should return true if coverage is full', () => {
    let vm = new FamilyMemberViewModel({
      accidentCoverage: Coverage.Full
    });

    expect(vm.hasAccidentFullCoverage).toEqual(true);
    expect(vm.hasAccidentComplementaryCoverage).toEqual(false);
  });
});
  