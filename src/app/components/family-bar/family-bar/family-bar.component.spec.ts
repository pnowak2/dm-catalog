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
      it(`should be undefined`, () => {
        expect(component.familyMembers).toBeUndefined();
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
        it('should render the container', () => {
          const el = debugElement.query(By.css('.asm-family-bar__tab-button'));

          expect(el).not.toBeNull();
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

      });
    });
  });
});
