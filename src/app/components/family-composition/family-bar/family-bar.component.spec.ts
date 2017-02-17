import { SwitchComponent } from './../../switch/switch.component';
import { ElementRef, Renderer } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { FamilyMemberModel, CoverageType } from './../family-member/model/family-member.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FamilyBarComponent } from './family-bar.component';

describe('FamilyBarComponent', () => {
  let component: FamilyBarComponent;
  let fixture: ComponentFixture<FamilyBarComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyBarComponent, SwitchComponent],
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
    describe('.ScrollStep', () => {
      it('should be defined', () => {
        expect(component.ScrollStep).toBeDefined();
      });

      it('should be set to comfortable value', () => {
        expect(component.ScrollStep).toEqual(80);
      });
    });

    describe('.familyMembersScrollContainer', () => {
      it(`should be defined`, () => {
        expect(component.familyMembersScrollContainer).toBeDefined();
      });

      it('should by type of element ref', () => {
        expect(component.familyMembersScrollContainer).toEqual(jasmine.any(ElementRef));
      });
    });

    describe('.familyPlusSwitch', () => {
      it(`should be defined`, () => {
        expect(component.familyPlusSwitch).toBeDefined();
      });

      it('should by type of element ref', () => {
        expect(component.familyPlusSwitch).toEqual(jasmine.any(SwitchComponent));
      });
    });

    describe('memberSelected', () => {
      it('should be defined', () => {
        expect(component.memberSelected).toBeDefined();
      });

      it('should be type of event emmiter', () => {
        expect(component.memberSelected).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('.familyMembers', () => {
      it(`should be initialized to empty array`, () => {
        expect(component.familyMembers).toEqual([]);
      });
    });

    describe('.familyBarMembers', () => {
      const one: FamilyMemberModel = {
        sicknessCoverage: CoverageType.None,
        accidentCoverage: undefined
      };

      const two: FamilyMemberModel = {
        sicknessCoverage: undefined,
        accidentCoverage: CoverageType.None
      };

      const three: FamilyMemberModel = {
        sicknessCoverage: CoverageType.Complementary,
        accidentCoverage: undefined
      };

      it(`should be initialized to empty array`, () => {
        expect(component.familyBarMembers).toEqual([]);
      });

      it('should return only covered family members if family plus is not checked', () => {
        component.familyMembers = [one, two, three];
        component.familyPlusSwitch.checked = false;

        expect(component.familyBarMembers).toEqual([three]);
      });

      it('should return all family members if family plus is checked', () => {
        component.familyMembers = [one, two, three];
        component.familyPlusSwitch.checked = true;

        expect(component.familyBarMembers).toEqual([one, two, three]);
      });
    });

    describe('.familyMembersWithCoverage', () => {
      it('should be defined', () => {
        expect(component.familyMembersWithCoverage).toBeDefined();
      });

      it('should return only members which are covered', () => {
        const one: FamilyMemberModel = {
          sicknessCoverage: CoverageType.None,
          accidentCoverage: undefined
        };

        const two: FamilyMemberModel = {
          sicknessCoverage: undefined,
          accidentCoverage: CoverageType.None
        };

        const three: FamilyMemberModel = {
          sicknessCoverage: CoverageType.Complementary,
          accidentCoverage: undefined
        };

        component.familyMembers = [one, two, three];

        expect(component.familyMembersWithCoverage).toEqual([three]);
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

    describe('.readOnly', () => {
      it('should be defined', () => {
        expect(component.readOnly).toBeDefined();
      });

      it('should be false', () => {
        expect(component.readOnly).toBe(false);
      });
    });

    describe('.familySize', () => {
      it('should be defined', () => {
        expect(component.familySize).toBeDefined();
      });

      it('should return count of all family members', () => {
        component.familyMembers = [{}, {}, {}];

        expect(component.familySize).toEqual(3);
      });
    });

    describe('.familyCoveredSize', () => {
      it('should be defined', () => {
        expect(component.familyCoveredSize).toBeDefined();
      });

      it('should return count of all family members which are covered', () => {
        const one: FamilyMemberModel = {
          sicknessCoverage: CoverageType.None,
          accidentCoverage: undefined
        };

        const two: FamilyMemberModel = {
          sicknessCoverage: undefined,
          accidentCoverage: CoverageType.None
        };

        const three: FamilyMemberModel = {
          sicknessCoverage: CoverageType.Complementary,
          accidentCoverage: undefined
        };

        component.familyMembers = [one, two, three];

        expect(component.familyCoveredSize).toEqual(1);
      });
    });

    describe('.selectedMember', () => {
      it(`should return selected member if one member has selection`, () => {
        const one: FamilyMemberModel = { selected: true };
        const two: FamilyMemberModel = { selected: false };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBe(one);
      });

      it(`should return first selected member if more than one members have selection`, () => {
        const one: FamilyMemberModel = { selected: true };
        const two: FamilyMemberModel = { selected: true };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBe(one);
      });

      it(`should return undefined if none of members have selection`, () => {
        const one: FamilyMemberModel = { selected: false };
        const two: FamilyMemberModel = { selected: false };

        component.familyMembers = [one, two];
        fixture.detectChanges();

        expect(component.selectedMember).toBeUndefined();
      });
    });

    describe('.handleTabClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.handleTabClicked).toEqual(jasmine.any(Function));
      });

      it('should toggle closed property', () => {
        component.closed = false;
        component.handleTabClicked();

        expect(component.closed).toBe(true);
      });
    });

    describe('.handleScrollLeftClicked()', () => {
      let originalScrollEl;
      let fakeScrollEl;

      beforeEach(() => {
        originalScrollEl = component.familyMembersScrollContainer.nativeElement;
        fakeScrollEl = {
          scrollLeft: 0
        };
        component.familyMembersScrollContainer.nativeElement = fakeScrollEl;
      });

      afterEach(() => {
        component.familyMembersScrollContainer.nativeElement = originalScrollEl;
      });

      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.handleScrollLeftClicked).toEqual(jasmine.any(Function));
      });

      it('should scroll family members container left', () => {
        const fakeEvent = { stopPropagation: () => { } };
        component.familyMembersScrollContainer.nativeElement.scrollLeft = 100;

        component.handleScrollLeftClicked(fakeEvent);

        expect(
          component.familyMembersScrollContainer.nativeElement.scrollLeft
        ).toEqual(20);
      });

      it('should stop event propagation', () => {
        const fakeEvent = jasmine.createSpyObj('evt', ['stopPropagation']);
        component.handleScrollLeftClicked(fakeEvent);

        expect(fakeEvent.stopPropagation).toHaveBeenCalled();
      });
    });

    describe('.handleScrollRightClicked()', () => {
      let originalScrollEl;
      let fakeScrollEl;

      beforeEach(() => {
        originalScrollEl = component.familyMembersScrollContainer.nativeElement;
        fakeScrollEl = {
          scrollLeft: 0
        };
        component.familyMembersScrollContainer.nativeElement = fakeScrollEl;
      });

      afterEach(() => {
        component.familyMembersScrollContainer.nativeElement = originalScrollEl;
      });

      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.handleScrollRightClicked).toEqual(jasmine.any(Function));
      });

      it('should scroll family members container right', () => {
        const fakeEvent = { stopPropagation: () => { } };
        component.familyMembersScrollContainer.nativeElement.scrollLeft = 15;

        component.handleScrollRightClicked(fakeEvent);

        expect(
          component.familyMembersScrollContainer.nativeElement.scrollLeft
        ).toEqual(95);
      });

      it('should stop event propagation', () => {
        const fakeEvent = jasmine.createSpyObj('evt', ['stopPropagation']);
        component.handleScrollRightClicked(fakeEvent);

        expect(fakeEvent.stopPropagation).toHaveBeenCalled();
      });
    });

    describe('.handleMemberClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.handleMemberClicked).toEqual(jasmine.any(Function));
      });

      it('should unselect all family members but the selected one', () => {
        const one: FamilyMemberModel = { selected: true };
        const two: FamilyMemberModel = { selected: false };
        const three: FamilyMemberModel = { selected: false };

        component.familyMembers = [one, two, three];

        component.handleMemberClicked(three);

        expect(one.selected).toBe(false);
        expect(two.selected).toBe(false);
        expect(three.selected).toBe(true);
      });

      it('should trigger component event', () => {
        const member: FamilyMemberModel = { selected: true };
        spyOn(component.memberSelected, 'next');

        component.handleMemberClicked(member);

        expect(component.memberSelected.next).toHaveBeenCalledWith(member);
      });

      it('should not trigger component event while in read mode', () => {
        const member: FamilyMemberModel = { selected: false };
        spyOn(component.memberSelected, 'next');

        component.readOnly = true;

        component.handleMemberClicked(member);

        expect(component.memberSelected.next).not.toHaveBeenCalled();
      });
    });
  });

  describe('Markup', () => {
    describe('Default Appearance', () => {
      it('should render proper root element', async(() => {
        const root = debugElement.query(
          By.css('.asm-family-bar:first-child')
        );
        expect(root).not.toBeNull();
      }));

      it('should render properly in read only mode', () => {
        component.readOnly = true;
        fixture.detectChanges();

        const el = debugElement.query(By.css('.asm-family-bar'));

        expect(el.classes['asm-family-bar--readonly']).toBeTruthy();
      });
    });

    describe('Family Members Section', () => {
      const one: FamilyMemberModel = {
      };
      const two: FamilyMemberModel = {
      };
      const three: FamilyMemberModel = {
      };

      beforeEach(() => {
        component.familyPlusSwitch.checked = true;
        component.familyMembers = [one, two, three];
        fixture.detectChanges();
      });

      it('should render the members container', () => {
        const el = debugElement.query(By.css('.asm-family-bar__members-container'));
        expect(el).not.toBeNull();
      });

      it('should properly render family members', () => {
        const el = debugElement.queryAll(By.css('asm-family-member'));
        expect(el.length).toBe(3);
      });

      it('should properly pass properties to family members', () => {
        const el = debugElement.queryAll(By.css('asm-family-member'));
        expect(el[0].properties['familyMember']).toEqual(one);
        expect(el[1].properties['familyMember']).toEqual(two);
        expect(el[2].properties['familyMember']).toEqual(three);
      });

      it('should trigger click event when family member clicked', () => {
        spyOn(component, 'handleMemberClicked');
        const el = debugElement.queryAll(By.css('asm-family-member'));

        el[0].triggerEventHandler('click', null);

        expect(component.handleMemberClicked).toHaveBeenCalledWith(one);
      });

      it('should be visible if closed property is set false', () => {
        component.closed = false;
        fixture.detectChanges();

        const el = debugElement.query(By.css('.asm-family-bar'));

        expect(el.classes['asm-family-bar--closed']).toBeFalsy();
      });

      it('should be hidden if closed property is set true', () => {
        component.closed = true;
        fixture.detectChanges();

        const el = debugElement.query(By.css('.asm-family-bar'));

        expect(el.classes['asm-family-bar--closed']).toBeTruthy();
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

          it('should trigger click event', () => {
            spyOn(component, 'handleTabClicked');

            const el = debugElement.query(By.css('.asm-family-bar__tab-button'));
            el.triggerEventHandler('click', null);

            expect(component.handleTabClicked).toHaveBeenCalled();
          });
        });

        describe('Selected Member Section', () => {
          describe('None of the Members Selected', () => {
            const one: FamilyMemberModel = {
              selected: false
            };
            const two: FamilyMemberModel = {
              selected: false
            };
            const three: FamilyMemberModel = {
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
            const one: FamilyMemberModel = {
              firstName: 'Piotr',
              familyName: 'Nowak',
              selected: true
            };
            const two: FamilyMemberModel = {
              firstName: 'Tom',
              familyName: 'Goemaes',
              selected: false
            };
            const three: FamilyMemberModel = {
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

        describe('Family Size Section', () => {
          const one: FamilyMemberModel = {
            sicknessCoverage: CoverageType.Complementary
          };
          const two: FamilyMemberModel = {
          };
          const three: FamilyMemberModel = {
          };
          const four: FamilyMemberModel = {
            sicknessCoverage: CoverageType.Full
          };
          const five: FamilyMemberModel = {
            sicknessCoverage: CoverageType.Full
          };

          it('should render properly for mixed coverage ', () => {
            component.familyMembers = [one, two, three];
            fixture.detectChanges();

            const el = debugElement.query(By.css('.asm-family-bar__tab-title'));

            expect(el.nativeElement.textContent).toContain('1/3');
          });

          it('should render properly for all family covered', () => {
            component.familyMembers = [one, four, five];
            fixture.detectChanges();

            const el = debugElement.query(By.css('.asm-family-bar__tab-title'));

            expect(el.nativeElement.textContent).toContain('3/3');
          });

          it('should render properly for no one from family covered', () => {
            component.familyMembers = [two, three];
            fixture.detectChanges();

            const el = debugElement.query(By.css('.asm-family-bar__tab-title'));

            expect(el.nativeElement.textContent).toContain('0/2');
          });
        });
      });

      describe('Scroll Buttons', () => {
        it('should render scroll left button', () => {
          const el = debugElement.query(By.css('.fa.fa-arrow-circle-left'));
          expect(el).not.toBeNull();
        });

        it('should trigger click event for scroll left', () => {
          spyOn(component, 'handleScrollLeftClicked');

          const el = debugElement.query(By.css('.asm-family-bar__scroll-left-container'));
          const fakeEvent = {};
          el.triggerEventHandler('click', fakeEvent);

          expect(component.handleScrollLeftClicked).toHaveBeenCalledWith(fakeEvent);
        });

        it('should render scroll right button', () => {
          const el = debugElement.query(By.css('.fa.fa-arrow-circle-right'));
          expect(el).not.toBeNull();
        });

        it('should trigger click event for scroll right', () => {
          spyOn(component, 'handleScrollRightClicked');

          const el = debugElement.query(By.css('.asm-family-bar__scroll-right-container'));
          const fakeEvent = {};
          el.triggerEventHandler('click', fakeEvent);

          expect(component.handleScrollRightClicked).toHaveBeenCalledWith(fakeEvent);
        });
      });

      describe('Family+ Switch', () => {
        it('should render switch component', () => {
          const el = debugElement.queryAll(By.css('asm-switch'));
          expect(el.length).not.toBeNull();
        });
      });
    });
  });
});
