export enum CoverageType {
  None,
  Complementary,
  Full
}

export enum Gender {
  Male,
  Female,
  Unknown
}

export interface FamilyMemberViewModel {
  personalNumber?: string;
  firstName?: string;
  familyName?: string;
  gender?: Gender;
  selected?: boolean;
  disabled?: boolean;
  relationName?: string;
  isExrelation?: boolean;
  birthDate?: Date;
  deathDate?: Date;
  mainLanguage?: string;
  delegationCountry?: string;
  coveredByOtherAffiliate?: boolean;
  hasComments?: boolean;
  sicknessCoverage?: CoverageType;
  sicknessCoverageDateFrom?: Date;
  sicknessCoverageDateTo?: Date;
  accidentCoverage?: CoverageType;
  accidentCoverageDateFrom?: Date;
  accidentCoverageDateTo?: Date;
}
