/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { FamilyMemberComponent } from './family-member.component';
import { FamilyMemberViewModel, Coverage, Sex } from './model/family-member.viewmodel';

describe('FamilyMemberComponent', () => {
  let component: FamilyMemberComponent;
  let fixture: ComponentFixture<FamilyMemberComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyMemberComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<FamilyMemberComponent>(FamilyMemberComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  describe('Creation', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Api', () => {
    describe('.customerNumberClick', () => {
      it('should be defined', () => {
        expect(component.customerNumberClick).toBeDefined();
      });

      it('should be type of event emmiter', () => {
        expect(component.customerNumberClick).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('customerNumberClicked()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.customerNumberClicked).toEqual(jasmine.any(Function));
      });
      
      it('should trigger component event', () => {
        spyOn(component.customerNumberClick, 'next');
        const member: FamilyMemberViewModel = {}
        component.familyMember = member;

        component.customerNumberClicked();

        expect(component.customerNumberClick.next).toHaveBeenCalledWith(member);
      });
    });

    describe('.familyMember', () => {
      it(`should be defined`, () => {
        expect(component.familyMember).toBeDefined();
      });

      it(`should be of appropriate type`, () => {
        expect(component.familyMember).toEqual({});
      });
    });

    describe('.hasSicknessComplementaryRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = Coverage.None;
        expect(component.hasSicknessComplementaryRights).toBe(false);
      });

      it('should return true when set to Complementary', () => {
        component.familyMember.sicknessCoverage = Coverage.Complementary;
        expect(component.hasSicknessComplementaryRights).toBe(true);
      });

      it('should return false when set to Full', () => {
        component.familyMember.sicknessCoverage = Coverage.Full;
        expect(component.hasSicknessComplementaryRights).toBe(false);
      });
    });

    describe('.hasSicknessFullRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = Coverage.None;
        expect(component.hasSicknessFullRights).toBe(false);
      });

      it('should return false when set to Complementary', () => {
        component.familyMember.sicknessCoverage = Coverage.Complementary;
        expect(component.hasSicknessFullRights).toBe(false);
      });

      it('should return true when set to Full', () => {
        component.familyMember.sicknessCoverage = Coverage.Full;
        expect(component.hasSicknessFullRights).toBe(true);
      });
    });

    describe('.hasAccidentComplementaryRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = Coverage.None;
        expect(component.hasAccidentComplementaryRights).toBe(false);
      });

      it('should return true when set to Complementary', () => {
        component.familyMember.accidentCoverage = Coverage.Complementary;
        expect(component.hasAccidentComplementaryRights).toBe(true);
      });

      it('should return false when set to Full', () => {
        component.familyMember.accidentCoverage = Coverage.Full;
        expect(component.hasAccidentComplementaryRights).toBe(false);
      });
    });

    describe('.hasAccidentFullRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = Coverage.None;
        expect(component.hasAccidentFullRights).toBe(false);
      });

      it('should return false when set to Complementary', () => {
        component.familyMember.accidentCoverage = Coverage.Complementary;
        expect(component.hasAccidentFullRights).toBe(false);
      });

      it('should return true when set to Full', () => {
        component.familyMember.accidentCoverage = Coverage.Full;
        expect(component.hasAccidentFullRights).toBe(true);
      });
    });

    describe('.isMale', () => {
      it('should return true when male', () => {
        component.familyMember.sex = Sex.Male;
        expect(component.isMale).toBe(true);
      });

      it('should return false when female', () => {
        component.familyMember.sex = Sex.Female;
        expect(component.isMale).toBe(false);
      });

      it('should return false when unknown', () => {
        component.familyMember.sex = Sex.Unknown;
        expect(component.isMale).toBe(false);
      });
    });

    describe('.isFemale', () => {
      it('should return true when female', () => {
        component.familyMember.sex = Sex.Female;
        expect(component.isFemale).toBe(true);
      });

      it('should return false when male', () => {
        component.familyMember.sex = Sex.Male;
        expect(component.isFemale).toBe(false);
      });

      it('should return false when unknown', () => {
        component.familyMember.sex = Sex.Unknown;
        expect(component.isFemale).toBe(false);
      });
    });

    describe('.isSexUnknown', () => {
      it('should return false when male', () => {
        component.familyMember.sex = Sex.Male;
        expect(component.isSexUnknown).toBe(false);
      });

      it('should return false when female', () => {
        component.familyMember.sex = Sex.Female;
        expect(component.isSexUnknown).toBe(false);
      });

      it('should return true when unknown', () => {
        component.familyMember.sex = Sex.Unknown;
        expect(component.isSexUnknown).toBe(true);
      });

      it('should return true when undefined', () => {
        component.familyMember.sex = undefined;
        expect(component.isSexUnknown).toBe(true);
      });
    });

    describe('.getBirthAndDeathDates()', () => {
      it('should return only birth date if death date not defined', () => {
        component.familyMember.birthDate = '16/02/1986';
        component.familyMember.deathDate = null;
        expect(component.getBirthAndDeathDates()).toEqual('16/02/1986');
      });

      it('should return only placeholder and death date if birth date not defined and death date is defined', () => {
        component.familyMember.birthDate = null;
        component.familyMember.deathDate = '19/05/2000';
        expect(component.getBirthAndDeathDates()).toEqual('(?) - 19/05/2000');
      });

      it('should return both birth and death date if both are defined', () => {
        component.familyMember.birthDate = '16/02/1986';
        component.familyMember.deathDate = '19/05/2000';
        expect(component.getBirthAndDeathDates()).toEqual('16/02/1986 - 19/05/2000');
      });

      it('should return palceholder if both birth and death dates are not defined', () => {
        component.familyMember.birthDate = null;
        component.familyMember.deathDate = null;
        expect(component.getBirthAndDeathDates()).toEqual('(?)');
      });
    });
  });

  describe('Markup', () => {
    describe('Default Appearance', () => {
      it('should render proper root element', async(() => {
        let root = debugElement.query(
          By.css('.asm-family-member:first-child')
        );
        expect(root).not.toBeNull();
      }));
    });

    describe('Selected / Unselected State', () => {
      it('should render selection when member selected', async(() => {
        component.familyMember.selected = true;
        fixture.detectChanges();

        let root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--selected']).toBeTruthy();
      }));

      it('should not render selection when member unselected', async(() => {
        component.familyMember.selected = false;
        fixture.detectChanges();

        let root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--selected']).not.toBeTruthy();
      }));
    });

    describe('Enabled / Disabled State', () => {
      it('should render enabled when member enabled', async(() => {
        component.familyMember.disabled = false;
        fixture.detectChanges();

        let root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--disabled']).toBeFalsy();
      }));

      it('should render disabled properly when member disabled', async(() => {
        component.familyMember.disabled = true;
        fixture.detectChanges();

        let root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--disabled']).toBeTruthy();
      }));
    });

    describe('Header Section', () => {
      describe('Relation & Personal number', () => {
        it('should render relation name', async(() => {
          component.familyMember.relationName = 'Affiliate';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('Affiliate');
        }));

        it('should render personal number', async(() => {
          component.familyMember.personalNumber = '234642';
          component.familyMember.coveredByOtherAffiliate = false;

          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('234642');
        }));

        it('should not render personal number as a link if not covered by another affiliate', async(() => {
          component.familyMember.personalNumber = '123456';
          component.familyMember.coveredByOtherAffiliate = false;

          fixture.detectChanges();

          let linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );
          expect(linkEl).toBeFalsy();
        }));

        it('should render personal number as a link if covered by another affiliate', async(() => {
          component.familyMember.personalNumber = '123456';
          component.familyMember.coveredByOtherAffiliate = true;

          fixture.detectChanges();

          let linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );
          expect(linkEl).toBeTruthy();
          expect(linkEl.nativeElement.textContent).toContain('123456');
        }));

        it('should ..', async(() => {
          spyOn(component, 'customerNumberClicked');

          const member: FamilyMemberViewModel = {
            personalNumber: '123456',
            coveredByOtherAffiliate: true
          }
          component.familyMember = member;
          fixture.detectChanges();

          let linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );
          
          linkEl.triggerEventHandler('click', null);

          expect(component.customerNumberClicked).toHaveBeenCalled();
        }));
      });

      describe('More menu', () => {
        it('should render the menu', async(() => {
          let menuEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__more-menu')
          );
          expect(menuEl).toBeTruthy();
        }));

        it('should render Show Info menu item', async(() => {
          let menuEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__more-menu')
          );
          expect(menuEl.nativeElement.textContent).toContain('Show Info');
        }));

        it('should render Send Email menu item', async(() => {
          let menuEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__more-menu')
          );
          expect(menuEl.nativeElement.textContent).toContain('Send e-mail');
        }));
      });
    });

    describe('Main Data Section', () => {
      describe('Name of Member', () => {
        it('should render first name', async(() => {
          component.familyMember.firstName = 'Piotr';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('Piotr');
        }));

        it('should render last name', async(() => {
          component.familyMember.familyName = 'Nowak';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('Nowak');
        }));
      });

      describe('Dates', () => {
        it('should properly render birth and death dates', async(() => {
          spyOn(component, 'getBirthAndDeathDates').and.returnValue('fake date');
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('fake date');
        }));
      });

      describe('Sex', () => {
        it('should render appropriate icon for male', async(() => {
          component.familyMember.sex = Sex.Male;
          fixture.detectChanges();

          let sexEl: DebugElement = debugElement.query(
            By.css('.fa.fa-mars')
          );

          expect(sexEl).toBeTruthy();
        }));

        it('should render appropriate icon for female', async(() => {
          component.familyMember.sex = Sex.Female;
          fixture.detectChanges();

          let sexEl: DebugElement = debugElement.query(
            By.css('.fa.fa-venus')
          );

          expect(sexEl).toBeTruthy();
        }));

        it('should render appropriate icon for unknown sex', async(() => {
          component.familyMember.sex = Sex.Unknown;
          fixture.detectChanges();

          let sexEl: DebugElement = debugElement.query(
            By.css('.fa.fa-genderless')
          );

          expect(sexEl).toBeTruthy();
        }));

        it('should render appropriate icon for sex undefined', async(() => {
          component.familyMember.sex = undefined;
          fixture.detectChanges();

          let sexEl: DebugElement = debugElement.query(
            By.css('.fa.fa-genderless')
          );

          expect(sexEl).toBeTruthy();
        }));
      });
    });

    describe('Footer Section', () => {
      describe('Languages', () => {
        it('should render main language section if language provided', async(() => {
          component.familyMember.mainLanguage = 'POL';

          fixture.detectChanges();

          let langEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(langEl).toBeTruthy();
          expect(langEl.nativeElement.textContent).toContain('POL');
        }));

        it('should not render main language section if language not provided', async(() => {
          component.familyMember.mainLanguage = undefined;

          fixture.detectChanges();

          let linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(linkEl).toBeFalsy();
        }));

        it('should render country code section if country is provided', async(() => {
          component.familyMember.delegationCountry = 'BEL';

          fixture.detectChanges();

          let langEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(langEl).toBeTruthy();
          expect(langEl.nativeElement.textContent).toContain('BEL');
        }));

        it('should not render country code section if country is not provided', async(() => {
          component.familyMember.delegationCountry = undefined;

          fixture.detectChanges();

          let langEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(langEl).toBeFalsy();
        }));
      });

      describe('Badges', () => {
        describe('Comments', () => {
          it('should not render badge if no flag set', async(() => {
            component.familyMember.hasComments = undefined;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl).toBeFalsy();
          }));

          it('should render properly if flag is set to true', async(() => {
            component.familyMember.hasComments = true;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly if flag is set to false', async(() => {
            component.familyMember.hasComments = false;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl === null).toBeTruthy();
          }));
        });

        describe('Covered By Other Affiliate', () => {
          it('should render properly if no flag set', async(() => {
            component.familyMember.coveredByOtherAffiliate = undefined;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );
            expect(badgeEl).toBeFalsy();
          }));

          it('should render properly if flag is set to true', async(() => {
            component.familyMember.coveredByOtherAffiliate = true;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );

            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly if flag is set to false', async(() => {
            component.familyMember.coveredByOtherAffiliate = false;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );

            expect(badgeEl === null).toBeTruthy();
          }));
        });

        describe('Sickness Coverage', () => {
          it('should render badge', async(() => {
            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );
            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly with no rights set', async(() => {
            component.familyMember.sicknessCoverage = undefined;
            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            fixture.detectChanges();

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to None', async(() => {
            component.familyMember.sicknessCoverage = Coverage.None;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Complementary', async(() => {
            component.familyMember.sicknessCoverage = Coverage.Complementary;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Full', async(() => {
            component.familyMember.sicknessCoverage = Coverage.Full;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
          }));
        });

        describe('Accident Coverage', () => {
          it('should render badge', async(() => {
            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );
            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly with no rights set', async(() => {
            component.familyMember.accidentCoverage = undefined;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to None', async(() => {
            component.familyMember.accidentCoverage = Coverage.None;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Complementary', async(() => {
            component.familyMember.accidentCoverage = Coverage.Complementary;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Full', async(() => {
            component.familyMember.accidentCoverage = Coverage.Full;
            fixture.detectChanges();

            let badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
          }));
        });
      });
    });
  });
});
