export enum Coverage {
  None,
  Complementary,
  Full
}

export interface FamilyMemberViewModel {
  personalNumber?: string;
  firstName?: string;
  familyName?: string;
  selected?: boolean;
  disabled?: boolean;
  relationName?: string;
  birthDate?: Date;
  deathDate?: Date;
  language?: string;
  country?: string;
  sicknessCoverage?: Coverage;
  accidentCoverage?: Coverage;
}