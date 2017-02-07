import { FamilyMemberViewModel, Coverage, Sex } from './family-member.viewmodel';

describe('Family Member View Model', () => {
  let model: FamilyMemberViewModel = new FamilyMemberViewModel();
  beforeEach(() => {
    model = new FamilyMemberViewModel();
  });

  describe('Api', () => {
    describe('.hasSicknessComplementaryRights', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.hasSicknessComplementaryRights).toBeDefined();
      })

      it('should return false when set to None', () => {
        model.sicknessCoverage = Coverage.None;
        expect(model.hasSicknessComplementaryRights).toBe(false);
      })

      it('should return true when set to Complementary', () => {
        model.sicknessCoverage = Coverage.Complementary;
        expect(model.hasSicknessComplementaryRights).toBe(true);
      })

      it('should return false when set to Full', () => {
        model.sicknessCoverage = Coverage.Full;
        expect(model.hasSicknessComplementaryRights).toBe(false);
      })
    });

    describe('.hasSicknessFullRights', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.hasSicknessFullRights).toBeDefined();
      })

      it('should return false when set to None', () => {
        model.sicknessCoverage = Coverage.None;
        expect(model.hasSicknessFullRights).toBe(false);
      })

      it('should return false when set to Complementary', () => {
        model.sicknessCoverage = Coverage.Complementary;
        expect(model.hasSicknessFullRights).toBe(false);
      })

      it('should return true when set to Full', () => {
        model.sicknessCoverage = Coverage.Full;
        expect(model.hasSicknessFullRights).toBe(true);
      })
    });

    describe('.hasAccidentComplementaryRights', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.hasAccidentComplementaryRights).toBeDefined();
      })

      it('should return false when set to None', () => {
        model.accidentCoverage = Coverage.None;
        expect(model.hasAccidentComplementaryRights).toBe(false);
      })

      it('should return true when set to Complementary', () => {
        model.accidentCoverage = Coverage.Complementary;
        expect(model.hasAccidentComplementaryRights).toBe(true);
      })

      it('should return false when set to Full', () => {
        model.accidentCoverage = Coverage.Full;
        expect(model.hasAccidentComplementaryRights).toBe(false);
      })
    });

    describe('.hasAccidentFullRights', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.hasAccidentFullRights).toBeDefined();
      })

      it('should return false when set to None', () => {
        model.accidentCoverage = Coverage.None;
        expect(model.hasAccidentFullRights).toBe(false);
      })

      it('should return false when set to Complementary', () => {
        model.accidentCoverage = Coverage.Complementary;
        expect(model.hasAccidentFullRights).toBe(false);
      })

      it('should return true when set to Full', () => {
        model.accidentCoverage = Coverage.Full;
        expect(model.hasAccidentFullRights).toBe(true);
      })
    });

    describe('.isMale', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.isMale).toBeDefined();
      })

      it('should return true when male', () => {
        model.sex = Sex.Male;
        expect(model.isMale).toBe(true);
      })

      it('should return false when female', () => {
        model.sex = Sex.Female;
        expect(model.isMale).toBe(false);
      })

      it('should return false when unknown', () => {
        model.sex = Sex.Unknown;
        expect(model.isMale).toBe(false);
      })
    });

    describe('.isFemale', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.isFemale).toBeDefined();
      })

      it('should return true when female', () => {
        model.sex = Sex.Female;
        expect(model.isFemale).toBe(true);
      })

      it('should return false when male', () => {
        model.sex = Sex.Male;
        expect(model.isFemale).toBe(false);
      })

      it('should return false when unknown', () => {
        model.sex = Sex.Unknown;
        expect(model.isFemale).toBe(false);
      })
    });

    describe('.isSexUnknown', () => {
      it('should be defined', () => {
        expect(FamilyMemberViewModel.prototype.isSexUnknown).toBeDefined();
      })

      it('should return false when male', () => {
        model.sex = Sex.Male;
        expect(model.isSexUnknown).toBe(false);
      })

      it('should return false when female', () => {
        model.sex = Sex.Female;
        expect(model.isSexUnknown).toBe(false);
      })

      it('should return true when unknown', () => {
        model.sex = Sex.Unknown;
        expect(model.isSexUnknown).toBe(true);
      })

      it('should return true when undefined', () => {
        model.sex = undefined;
        expect(model.isSexUnknown).toBe(true);
      })
    });
  });
});
