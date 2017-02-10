import { FamilyMemberModel, Coverage } from './../model/family-member.model';
export class FamilyMemberViewModel {
  constructor(private model: FamilyMemberModel) {
    this.model || {};
  }

  get personalNumber(): string {
    return this.model.personalNumber;
  }

  get hasAccidentFullCoverage(): boolean {
    return this.model.accidentCoverage === Coverage.Full;
  }

  get hasAccidentComplementaryCoverage(): boolean {
    return this.model.accidentCoverage === Coverage.Complementary;
  }
}
