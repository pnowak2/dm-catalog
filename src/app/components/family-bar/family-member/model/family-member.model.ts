export enum Coverage {
  None,
  Complementary,
  Full
}

export interface FamilyMemberModel {
  personalNumber?: string;
  birthDate?: Date;
  accidentCoverage?: Coverage;
}
