/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { FamilyMemberComponent } from './family-member.component';
import { FamilyMemberViewModel, CoverageType, Gender } from './model/family-member.viewmodel';

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

    describe('handleCustomerNumberClicked()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.handleCustomerNumberClicked).toEqual(jasmine.any(Function));
      });

      it('should trigger component event', () => {
        spyOn(component.customerNumberClick, 'next');
        const member: FamilyMemberViewModel = {};
        component.familyMember = member;

        component.handleCustomerNumberClicked();

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

    describe('.fullName', () => {
      it('should be defined', () => {
        expect(component.fullName).toBeDefined();
      });

      it('should return full member name when all data is provided', () => {
        const member: FamilyMemberViewModel = {
          firstName: 'Piotr',
          familyName: 'Nowak'
        };
        component.familyMember = member;

        expect(component.fullName).toEqual('Piotr Nowak');
      });

      it('should return full member name when some of the data is provided', () => {
        const member: FamilyMemberViewModel = {
          firstName: undefined,
          familyName: 'Nowak'
        };
        component.familyMember = member;

        expect(component.fullName).toEqual('Nowak');
      });

    });

    describe('.hasSicknessComplementaryRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = CoverageType.None;
        expect(component.hasSicknessComplementaryRights).toBe(false);
      });

      it('should return true when set to Complementary', () => {
        component.familyMember.sicknessCoverage = CoverageType.Complementary;
        expect(component.hasSicknessComplementaryRights).toBe(true);
      });

      it('should return false when set to Full', () => {
        component.familyMember.sicknessCoverage = CoverageType.Full;
        expect(component.hasSicknessComplementaryRights).toBe(false);
      });
    });

    describe('.hasSicknessFullRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = CoverageType.None;
        expect(component.hasSicknessFullRights).toBe(false);
      });

      it('should return false when set to Complementary', () => {
        component.familyMember.sicknessCoverage = CoverageType.Complementary;
        expect(component.hasSicknessFullRights).toBe(false);
      });

      it('should return true when set to Full', () => {
        component.familyMember.sicknessCoverage = CoverageType.Full;
        expect(component.hasSicknessFullRights).toBe(true);
      });
    });

    describe('.hasAccidentComplementaryRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = CoverageType.None;
        expect(component.hasAccidentComplementaryRights).toBe(false);
      });

      it('should return true when set to Complementary', () => {
        component.familyMember.accidentCoverage = CoverageType.Complementary;
        expect(component.hasAccidentComplementaryRights).toBe(true);
      });

      it('should return false when set to Full', () => {
        component.familyMember.accidentCoverage = CoverageType.Full;
        expect(component.hasAccidentComplementaryRights).toBe(false);
      });
    });

    describe('.hasAccidentFullRights', () => {
      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = CoverageType.None;
        expect(component.hasAccidentFullRights).toBe(false);
      });

      it('should return false when set to Complementary', () => {
        component.familyMember.accidentCoverage = CoverageType.Complementary;
        expect(component.hasAccidentFullRights).toBe(false);
      });

      it('should return true when set to Full', () => {
        component.familyMember.accidentCoverage = CoverageType.Full;
        expect(component.hasAccidentFullRights).toBe(true);
      });
    });

    describe('.isMale', () => {
      it('should return true when male', () => {
        component.familyMember.gender = Gender.Male;
        expect(component.isMale).toBe(true);
      });

      it('should return false when female', () => {
        component.familyMember.gender = Gender.Female;
        expect(component.isMale).toBe(false);
      });

      it('should return false when unknown', () => {
        component.familyMember.gender = Gender.Unknown;
        expect(component.isMale).toBe(false);
      });
    });

    describe('.isFemale', () => {
      it('should return true when female', () => {
        component.familyMember.gender = Gender.Female;
        expect(component.isFemale).toBe(true);
      });

      it('should return false when male', () => {
        component.familyMember.gender = Gender.Male;
        expect(component.isFemale).toBe(false);
      });

      it('should return false when unknown', () => {
        component.familyMember.gender = Gender.Unknown;
        expect(component.isFemale).toBe(false);
      });
    });

    describe('.isGenderUnknown', () => {
      it('should return false when male', () => {
        component.familyMember.gender = Gender.Male;
        expect(component.isGenderUnknown).toBe(false);
      });

      it('should return false when female', () => {
        component.familyMember.gender = Gender.Female;
        expect(component.isGenderUnknown).toBe(false);
      });

      it('should return true when unknown', () => {
        component.familyMember.gender = Gender.Unknown;
        expect(component.isGenderUnknown).toBe(true);
      });

      it('should return true when undefined', () => {
        component.familyMember.gender = undefined;
        expect(component.isGenderUnknown).toBe(true);
      });
    });
  });

  describe('Markup', () => {
    describe('Default Appearance', () => {
      it('should render proper root element', async(() => {
        const root = debugElement.query(
          By.css('.asm-family-member:first-child')
        );
        expect(root).not.toBeNull();
      }));
    });

    describe('Selected / Unselected State', () => {
      it('should render selection when member selected', async(() => {
        component.familyMember.selected = true;
        fixture.detectChanges();

        const root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--selected']).toBeTruthy();
      }));

      it('should not render selection when member unselected', async(() => {
        component.familyMember.selected = false;
        fixture.detectChanges();

        const root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--selected']).not.toBeTruthy();
      }));
    });

    describe('Enabled / Disabled State', () => {
      it('should render enabled when member enabled', async(() => {
        component.familyMember.disabled = false;
        fixture.detectChanges();

        const root = debugElement.query(
          By.css('.asm-family-member')
        );
        expect(root.classes['asm-family-member--disabled']).toBeFalsy();
      }));

      it('should render disabled properly when member disabled', async(() => {
        component.familyMember.disabled = true;
        fixture.detectChanges();

        const root = debugElement.query(
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

        it('should render properly ex-relation if set to true', async(() => {
          component.familyMember.isExrelation = true;
          fixture.detectChanges();

          const el = debugElement.query(
            By.css('.asm-family-member__member-relation')
          );

          expect(el.classes['asm-family-member__member-relation--ex']).toBeTruthy();
        }));

        it('should render properly ex-relation if set to false', async(() => {
          component.familyMember.isExrelation = false;
          fixture.detectChanges();

          const el = debugElement.query(
            By.css('.asm-family-member__member-relation')
          );

          expect(el.classes['asm-family-member__member-relation--ex']).toBeFalsy();
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

          const linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );
          expect(linkEl).toBeFalsy();
        }));

        it('should render personal number as a link if covered by another affiliate', async(() => {
          component.familyMember.personalNumber = '123456';
          component.familyMember.coveredByOtherAffiliate = true;

          fixture.detectChanges();

          const linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );
          expect(linkEl).toBeTruthy();
          expect(linkEl.nativeElement.textContent).toContain('123456');
        }));

        it('should call event handler when clicked', async(() => {
          spyOn(component, 'handleCustomerNumberClicked');

          const member: FamilyMemberViewModel = {
            personalNumber: '123456',
            coveredByOtherAffiliate: true
          };
          component.familyMember = member;
          fixture.detectChanges();

          const linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__member-number')
          );

          linkEl.triggerEventHandler('click', null);

          expect(component.handleCustomerNumberClicked).toHaveBeenCalled();
        }));
      });

      describe('More menu', () => {
        it('should render the menu', async(() => {
          const menuEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__more-menu')
          );
          expect(menuEl).toBeTruthy();
        }));

        it('should render Show Info menu item', async(() => {
          const menuEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__more-menu')
          );
          expect(menuEl.nativeElement.textContent).toContain('Show Info');
        }));

        it('should render Send Email menu item', async(() => {
          const menuEl: DebugElement = debugElement.query(
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

        it('should render name tooltip if all data provided', () => {
          component.familyMember.firstName = 'Piotr';
          component.familyMember.familyName = 'Nowak';
          fixture.detectChanges();

          const el = debugElement.query(By.css('.asm-family-member__person-name'));

          expect(el.properties['title']).toEqual('Piotr Nowak');
        });

        it('should render name tooltip if data is missing', () => {
          component.familyMember.firstName = undefined;
          component.familyMember.familyName = 'Nowak';
          fixture.detectChanges();

          const el = debugElement.query(By.css('.asm-family-member__person-name'));

          expect(el.properties['title']).toEqual('Nowak');
        });
      });

      describe('Dates', () => {
        it('should properly render birth date', async(() => {
          component.familyMember.birthDate = new Date(2017, 2, 12);
          fixture.detectChanges();

          const el = fixture.debugElement.query(By.css('.asm-family-member__person-born'));

          expect(el.nativeElement.textContent).toContain('12/03/2017');
        }));

        it('should properly render birth and death date', async(() => {
          component.familyMember.birthDate = new Date(1968, 0, 1);
          component.familyMember.deathDate = new Date(2017, 1, 13);
          fixture.detectChanges();

          const el = fixture.debugElement.query(By.css('.asm-family-member__person-born'));

          expect(el.nativeElement.textContent).toContain('01/01/1968');
          expect(el.nativeElement.textContent).toContain('13/02/2017');
        }));
      });

      describe('Gender', () => {
        it('should render appropriate icon for male', async(() => {
          component.familyMember.gender = Gender.Male;
          fixture.detectChanges();

          const el: DebugElement = debugElement.query(
            By.css('.fa.fa-mars')
          );

          expect(el).toBeTruthy();
        }));

        it('should render appropriate icon for female', async(() => {
          component.familyMember.gender = Gender.Female;
          fixture.detectChanges();

          const el: DebugElement = debugElement.query(
            By.css('.fa.fa-venus')
          );

          expect(el).toBeTruthy();
        }));

        it('should render appropriate icon for unknown gender', async(() => {
          component.familyMember.gender = Gender.Unknown;
          fixture.detectChanges();

          const el: DebugElement = debugElement.query(
            By.css('.fa.fa-genderless')
          );

          expect(el).toBeTruthy();
        }));

        it('should render appropriate icon for gender undefined', async(() => {
          component.familyMember.gender = undefined;
          fixture.detectChanges();

          const el: DebugElement = debugElement.query(
            By.css('.fa.fa-genderless')
          );

          expect(el).toBeTruthy();
        }));
      });
    });

    describe('Footer Section', () => {
      describe('Languages', () => {
        it('should render main language section if language provided', async(() => {
          component.familyMember.mainLanguage = 'POL';

          fixture.detectChanges();

          const langEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(langEl).toBeTruthy();
          expect(langEl.nativeElement.textContent).toContain('POL');
        }));

        it('should not render main language section if language not provided', async(() => {
          component.familyMember.mainLanguage = undefined;

          fixture.detectChanges();

          const linkEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(linkEl).toBeFalsy();
        }));

        it('should render country code section if country is provided', async(() => {
          component.familyMember.delegationCountry = 'BEL';

          fixture.detectChanges();

          const langEl: DebugElement = debugElement.query(
            By.css('.asm-family-member__language')
          );
          expect(langEl).toBeTruthy();
          expect(langEl.nativeElement.textContent).toContain('BEL');
        }));

        it('should not render country code section if country is not provided', async(() => {
          component.familyMember.delegationCountry = undefined;

          fixture.detectChanges();

          const langEl: DebugElement = debugElement.query(
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

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl).toBeFalsy();
          }));

          it('should render properly if flag is set to true', async(() => {
            component.familyMember.hasComments = true;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly if flag is set to false', async(() => {
            component.familyMember.hasComments = false;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-comment.asm-family-member__badge')
            );

            expect(badgeEl === null).toBeTruthy();
          }));
        });

        describe('Covered By Other Affiliate', () => {
          it('should render properly if no flag set', async(() => {
            component.familyMember.coveredByOtherAffiliate = undefined;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );
            expect(badgeEl).toBeFalsy();
          }));

          it('should render properly if flag is set to true', async(() => {
            component.familyMember.coveredByOtherAffiliate = true;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );

            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly if flag is set to false', async(() => {
            component.familyMember.coveredByOtherAffiliate = false;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-warning.asm-family-member__badge')
            );

            expect(badgeEl === null).toBeTruthy();
          }));
        });

        describe('Sickness Coverage', () => {
          it('should render badge', async(() => {
            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );
            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly with no rights set', async(() => {
            component.familyMember.sicknessCoverage = undefined;
            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            fixture.detectChanges();

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to None', async(() => {
            component.familyMember.sicknessCoverage = CoverageType.None;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Complementary', async(() => {
            component.familyMember.sicknessCoverage = CoverageType.Complementary;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Full', async(() => {
            component.familyMember.sicknessCoverage = CoverageType.Full;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-heart.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
          }));
        });

        describe('Accident Coverage', () => {
          it('should render badge', async(() => {
            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );
            expect(badgeEl).toBeTruthy();
          }));

          it('should render properly with no rights set', async(() => {
            component.familyMember.accidentCoverage = undefined;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to None', async(() => {
            component.familyMember.accidentCoverage = CoverageType.None;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Complementary', async(() => {
            component.familyMember.accidentCoverage = CoverageType.Complementary;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
              By.css('.fa.fa-plus.asm-family-member__badge')
            );

            expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
            expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
          }));

          it('should render properly with rights set to Full', async(() => {
            component.familyMember.accidentCoverage = CoverageType.Full;
            fixture.detectChanges();

            const badgeEl: DebugElement = debugElement.query(
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
