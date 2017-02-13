import { ElementRef } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { FamilyMemberViewModel } from './../family-member/model/family-member.viewmodel';
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
    describe('familyMemberSelected', () => {
      it('should be defined', () => {
        expect(component.familyMemberSelected).toBeDefined();
      });
      
      it('should be type of event emmiter', () => {
        expect(component.familyMemberSelected).toEqual(jasmine.any(EventEmitter));
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

    describe('.tabClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.tabClicked).toEqual(jasmine.any(Function));
      });

      it('should toggle closed property', () => {
        component.closed = false;
        component.tabClicked();

        expect(component.closed).toBe(true);
      });
    });

    describe('.scrollLeftClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.scrollLeftClicked).toEqual(jasmine.any(Function));
      });

      it('should stop event propagation', () => {
        const fakeEvent = jasmine.createSpyObj('evt', ['stopPropagation']);
        component.scrollLeftClicked(fakeEvent);

        expect(fakeEvent.stopPropagation).toHaveBeenCalled();
      });
    });

    describe('.scrollRightClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.scrollRightClicked).toEqual(jasmine.any(Function));
      });

      it('should stop event propagation', () => {
        const fakeEvent = jasmine.createSpyObj('evt', ['stopPropagation']);
        component.scrollRightClicked(fakeEvent);

        expect(fakeEvent.stopPropagation).toHaveBeenCalled();
      });
    });
    
    describe('.familyMemberClicked()', () => {
      it('should be defined', () => {
        expect(FamilyBarComponent.prototype.familyMemberClicked).toEqual(jasmine.any(Function));
      });
      
      it('should unselect all family members but the selected one', () => {
        let one: FamilyMemberViewModel = { selected: true };
        let two: FamilyMemberViewModel = { selected: false };
        let three: FamilyMemberViewModel = { selected: false };

        component.familyMembers = [one, two, three];

        component.familyMemberClicked(three)

        expect(one.selected).toBe(false);
        expect(two.selected).toBe(false);
        expect(three.selected).toBe(true);
      });
      
      it('should trigger component event', () => {
        let member: FamilyMemberViewModel = { selected: true };
        spyOn(component.familyMemberSelected, 'next');

        component.familyMemberClicked(member);

        expect(component.familyMemberSelected.next).toHaveBeenCalledWith(member);
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
      
      it('should trigger click event when family member clicked', () => {
        spyOn(component, 'familyMemberClicked');
        const el = debugElement.queryAll(By.css('asm-family-member'));

        el[2].triggerEventHandler('click', null);

        expect(component.familyMemberClicked).toHaveBeenCalledWith(three);
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
            spyOn(component, 'tabClicked');

            const el = debugElement.query(By.css('.asm-family-bar__tab-button'));
            el.triggerEventHandler('click', null);

            expect(component.tabClicked).toHaveBeenCalled();
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

        it('should trigger click event for scroll left', () => {
          spyOn(component, 'scrollLeftClicked');

          const el = debugElement.query(By.css('.asm-family-bar__scroll-left-container'));
          const fakeEvent = {};
          el.triggerEventHandler('click', fakeEvent);

          expect(component.scrollLeftClicked).toHaveBeenCalledWith(fakeEvent);
        });

        it('should render scroll right button', () => {
          const el = debugElement.query(By.css('.fa.fa-arrow-circle-right'));
          expect(el).not.toBeNull();
        });

        it('should trigger click event for scroll right', () => {
          spyOn(component, 'scrollRightClicked');

          const el = debugElement.query(By.css('.asm-family-bar__scroll-right-container'));
          const fakeEvent = {};
          el.triggerEventHandler('click', fakeEvent);

          expect(component.scrollRightClicked).toHaveBeenCalledWith(fakeEvent);
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
