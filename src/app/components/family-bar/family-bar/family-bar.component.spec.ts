import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FamilyBarComponent } from './family-bar.component';

describe('FamilyBarComponent', () => {
  let component: FamilyBarComponent;
  let fixture: ComponentFixture<FamilyBarComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyBarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<FamilyBarComponent>(FamilyBarComponent);
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
    describe('.familyMembers', () => {
      it(`should be initialized to empty array`, () => {
        expect(component.familyMembers).toEqual([]);
      });
    });
    
    describe('.closed', () => {
      it('should be defined', () => {
        expect(component.closed).toBeDefined();
      });

      it('should be false', () => {
        expect(component.closed).toBe(false);
      });
    });

    describe('.selectedMember', () => {
      it(`should return selected member if one member has selection`, () => {
        const one: FamilyMemberViewModel = { selected: true };
        const two: FamilyMemberViewModel = { selected: false };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBe(one);
      });

      it(`should return first selected member if more than one members have selection`, () => {
        const one: FamilyMemberViewModel = { selected: true };
        const two: FamilyMemberViewModel = { selected: true };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBe(one);
      });

      it(`should return undefined if none of members have selection`, () => {
        const one: FamilyMemberViewModel = { selected: false };
        const two: FamilyMemberViewModel = { selected: false };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBeUndefined();
      });
    });
  });

  describe('Markup', () => {
    describe('Default Appearance', () => {
      it('should render proper root element', async(() => {
        let root = debugElement.query(
          By.css('.asm-family-bar:first-child')
        );
        expect(root).not.toBeNull();
      }));
    });

    describe('Family Members Section', () => {
      const one: FamilyMemberViewModel = {};
      const two: FamilyMemberViewModel = {};
      const three: FamilyMemberViewModel = {};

      beforeEach(() => {
        component.familyMembers = [one, two, three];
        fixture.detectChanges();
      });

      it('should render the members container', () => {
        const el = debugElement.query(By.css('.asm-family-bar__members-container'));
        expect(el).not.toBeNull();
      });

      it('should render family members inside container', () => {
        const el = debugElement.queryAll(By.css('.asm-family-bar__members-container asm-family-member'));
        expect(el.length).toBe(3);
      });

      it('should properly pass properties to family members', () => {
        const el = debugElement.queryAll(By.css('asm-family-member'));
        expect(el[0].properties['familyMember']).toEqual(one);
        expect(el[1].properties['familyMember']).toEqual(two);
        expect(el[2].properties['familyMember']).toEqual(three);
      });
    });

    describe('Actions Section', () => {
      describe('Tab', () => {
        describe('General Appearance', () => {
          it('should render the container', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-button'));
            expect(el).not.toBeNull();
          });

          it('should render static label text', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-button'));
            expect(el.nativeElement.textContent).toContain('Family Composition');
          });
        });

        describe('None of the Members Selected', () => {
          const one: FamilyMemberViewModel = {
            selected: false
          };
          const two: FamilyMemberViewModel = {
            selected: false
          };
          const three: FamilyMemberViewModel = {
            selected: false
          };

          beforeEach(() => {
            component.familyMembers = [one, two, three];
            fixture.detectChanges();
          });

          it('should not render first name', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-first-name'));
            expect(el).toBeNull();
          });

          it('should not render last name', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-last-name'));
            expect(el).toBeNull();
          });

          it('should render member not selected label', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-not-selected'));
            expect(el.nativeElement.textContent).toContain('(No selection)');
          });
        });

        describe('One Member Selected', () => {
          const one: FamilyMemberViewModel = {
            firstName: 'Piotr',
            familyName: 'Nowak',
            selected: true
          };
          const two: FamilyMemberViewModel = {
            firstName: 'Tom',
            familyName: 'Goemaes',
            selected: false
          };
          const three: FamilyMemberViewModel = {
            firstName: 'Jeremy',
            familyName: 'Lebrun',
            selected: false
          };

          beforeEach(() => {
            component.familyMembers = [one, two, three];
            fixture.detectChanges();
          });

          it('should render first name of selected member', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-first-name'));
            expect(el.nativeElement.textContent).toContain('Piotr');
          });

          it('should render last name of selected member', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-last-name'));
            expect(el.nativeElement.textContent).toContain('Nowak');
          });

          it('should not render member not selected label', () => {
            const el = debugElement.query(By.css('.asm-family-bar__tab-member-not-selected'));
            expect(el).toBeNull();
          });
        });
      });

      describe('Scroll Buttons', () => {
        it('should render scroll left button', () => {
          const el = debugElement.query(By.css('.fa.fa-arrow-circle-left'));
          expect(el).not.toBeNull();
        });

        it('should render scroll right button', () => {
          const el = debugElement.query(By.css('.fa.fa-arrow-circle-right'));
          expect(el).not.toBeNull();
        });
      });

      describe('Family+ Switch', () => {
        it('should render family members inside container', () => {
          const el = debugElement.queryAll(By.css('asm-switch'));
          expect(el.length).not.toBeNull();
        });
      });
    });
  });
});
