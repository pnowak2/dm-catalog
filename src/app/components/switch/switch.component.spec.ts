/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<SwitchComponent>(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Api', () => {
    describe('.checked', () => {
      it(`should be defined`, () => {
        expect(component.checked).toBeDefined();
      });

      it(`should be set to false`, () => {
        expect(component.checked).toBe(false);
      });
    });

    describe('.disabled', () => {
      it(`should be defined`, () => {
        expect(component.disabled).toBeDefined();
      });

      it(`should be set to false`, () => {
        expect(component.disabled).toBe(false);
      });
    });

    describe('.toggle', () => {
      it(`should be defined`, () => {
        expect(component.toggle).toBeDefined();
      });

      it(`should be type of EventEmitter`, () => {
        expect(component.toggle).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('clicked()', () => {
      it('should be defined', () => {
        expect(SwitchComponent.prototype.clicked).toEqual(jasmine.any(Function));
      });

      it(`should negate checked property if set to false'`, () => {
        component.checked = false;
        component.clicked();

        expect(component.checked).toBe(true);
      });

      it(`should negate checked property if set to true'`, () => {
        component.checked = true;
        component.clicked();

        expect(component.checked).toBe(false);
      });

      it(`should trigger toggle event with negated value'`, () => {
        spyOn(component.toggle, 'emit');

        component.checked = false;
        component.clicked();

        expect(component.toggle.emit).toHaveBeenCalledWith(true);
      });

      it(`should not trigger toggle event if disabled'`, () => {
        spyOn(component.toggle, 'emit');

        component.disabled = true;
        component.clicked();

        expect(component.toggle.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('Markup', () => {
    describe('events', () => {
      it('should call appropriate handler when clicked host element', async(() => {
        spyOn(component, 'clicked');

        fixture.debugElement.triggerEventHandler('click', {});

        expect(component.clicked).toHaveBeenCalled();
      }));
    });

    describe('rendering', () => {
      it('should render switch markup', async(() => {
        let el = fixture.debugElement.query(By.css('.asm-switch'));
        expect(el).not.toBeNull();
      }));

      describe('checked/unchecked', () => {
        it('should not render checked switch by default', async(() => {
          let el = fixture.debugElement.query(By.css('.asm-switch'));
          expect(el.classes['asm-switch--checked']).toBeFalsy();
        }));

        it('should render checked switch if property is set to true', async(() => {
          component.checked = true;
          fixture.detectChanges();

          let el = fixture.debugElement.query(By.css('.asm-switch'));
          expect(el.classes['asm-switch--checked']).toBeTruthy();
        }));

        it('should not render checked switch if property is set to false', async(() => {
          component.checked = false;
          fixture.detectChanges();

          let el = fixture.debugElement.query(By.css('.asm-switch'));
          expect(el.classes['asm-switch--checked']).toBeFalsy();
        }));
      });

      describe('enabled/disabled', () => {
        it('should not render disabled switch if property is set to false', async(() => {
          component.disabled = false;
          fixture.detectChanges();

          let el = fixture.debugElement.query(By.css('.asm-switch'));
          expect(el.classes['asm-switch--disabled']).toBeFalsy();
        }));

        it('should render disabled switch if property is set to true', async(() => {
          component.disabled = true;
          fixture.detectChanges();

          let el = fixture.debugElement.query(By.css('.asm-switch'));
          expect(el.classes['asm-switch--disabled']).toBeTruthy();
        }));
      });
    });
  });
});
