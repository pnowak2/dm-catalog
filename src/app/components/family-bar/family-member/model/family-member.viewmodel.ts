export enum Coverage {
  None,
  Complementary,
  Full
}

export enum Sex {
  Male,
  Female,
  Unknown
}

export class FamilyMemberViewModel {
  personalNumber: string;
  firstName: string;
  familyName: string;
  sex: Sex;
  selected: boolean;
  disabled: boolean;
  relationName: string;
  birthDate: Date;
  deathDate: Date;
  language: string;
  country: string;
  coveredByOtherAffiliate: boolean;
  hasComments: boolean;
  sicknessCoverage: Coverage;
  accidentCoverage: Coverage;

  get hasSicknessComplementaryRights(): boolean {
    return this.sicknessCoverage === Coverage.Complementary;
  }

  get hasSicknessFullRights(): boolean {
    return this.sicknessCoverage === Coverage.Full;
  }

  get hasAccidentComplementaryRights(): boolean {
    return this.accidentCoverage === Coverage.Complementary;
  }

  get hasAccidentFullRights(): boolean {
    return this.accidentCoverage === Coverage.Full;
  }

  get isMale(): boolean {
    return this.sex === Sex.Male;
  }

  get isFemale(): boolean {
    return this.sex === Sex.Female;
  }

  get isSexUnknown(): boolean {
    return this.sex === Sex.Unknown || this.sex === undefined;
  }
}