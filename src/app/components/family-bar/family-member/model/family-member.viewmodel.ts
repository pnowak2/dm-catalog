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

export interface FamilyMemberViewModel {
  personalNumber?: string;
  firstName?: string;
  familyName?: string;
  sex?: Sex;
  selected?: boolean;
  disabled?: boolean;
  relationName?: string;
  birthDate?: string;
  deathDate?: string;
  mainLanguage?: string;
  delegationCountry?: string;
  coveredByOtherAffiliate?: boolean;
  hasComments?: boolean;
  sicknessCoverage?: Coverage;
  sicknessCoverageDateFrom?: string;
  sicknessCoverageDateTo?: string;
  accidentCoverage?: Coverage;
  accidentCoverageDateFrom?: string;
  accidentCoverageDateTo?: string;
}
