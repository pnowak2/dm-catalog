/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { FamilyMemberComponent } from './family-member.component';
import { FamilyMemberViewModel, SicknessCoverage } from './model/family-member.viewmodel';

describe('FamilyMemberComponent', () => {
  let component: FamilyMemberComponent;
  let fixture: ComponentFixture<FamilyMemberComponent>;
  let nativeElement;
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
    nativeElement = fixture.debugElement.nativeElement;
    debugElement = fixture.debugElement;
  });

  describe('Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Api', () => {
    describe('.familyMember', () => {
      it(`should be defined`, () => {
        expect(component.familyMember).toBeDefined();
      });

      it(`should be empty object`, () => {
        expect(component.familyMember).toEqual({});
      });
    });
  });

  describe('Markup', () => {
    it('should render proper root element', async(() => {
      let root = debugElement.query(By.css('.asm-family-member'));
      expect(root).not.toBeNull();
    }));

    describe('Selected / Unselected State', () => {
      it('should render properly when selected', async(() => {
        component.familyMember.selected = true;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--selected']).toBeTruthy();
      }));

      it('should render properly when unselected', async(() => {
        component.familyMember.selected = false;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--selected']).not.toBeTruthy();
      }));
    });

    describe('Enabled / Disabled State', () => {
      it('should render properly when enabled', async(() => {
        component.familyMember.disabled = false;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--disabled']).toBeFalsy();
      }));

      it('should render properly when disabled', async(() => {
        component.familyMember.disabled = true;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--disabled']).toBeTruthy();
      }));
    });

    describe('Header Section', () => {
      it('should render relation name', async(() => {
        component.familyMember.relationName = 'Affiliate';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('Affiliate');
      }));

      it('should render personal number', async(() => {
        component.familyMember.personalNumber = '234642';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('234642');
      }));
    });

    describe('Main Data Section', () => {
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

      it('should render birth date', async(() => {
        component.familyMember.birthDate = new Date(2017, 1, 16);
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('16/02/2017');
      }));

      it('should render death date', async(() => {
        component.familyMember.deathDate = new Date(1986, 3, 24);
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('24/04/1986');
      }));
    });

    describe('Footer Section', () => {
      describe('Languages', () => {
        it('should render main language', async(() => {
          component.familyMember.language = 'POL';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('POL');
        }));

        it('should render country code', async(() => {
          component.familyMember.country = 'BEL';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('BEL');
        }));
      });

      describe('Coverage Badges', () => {
        let badgeEl;

        beforeEach(() => {
          badgeEl = debugElement.query(By.css('.fa.fa-heart.asm-family-member__badge'));
        })

        it('should render sickness badge', async(() => {
          expect(badgeEl).toBeTruthy();
        }));

        it('should render proper sickness badge with no rights set', async(() => {
          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper sickness badge with rights set to None', async(() => {
          component.familyMember.sicknessCoverage = SicknessCoverage.None;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper sickness badge with rights set to Complementary', async(() => {
          component.familyMember.sicknessCoverage = SicknessCoverage.Complementary;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper sickness badge with rights set to Full', async(() => {
          component.familyMember.sicknessCoverage = SicknessCoverage.Full;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
        }));
      });
    });
  });

});
