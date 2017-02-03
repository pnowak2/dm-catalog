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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('api', () => {
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

    describe('onClicked()', () => {
      it('should be defined', () => {
        expect(SwitchComponent.prototype.onClicked).toEqual(jasmine.any(Function));
      });

      it(`should negate checked property if set to false'`, () => {
        component.checked = false;
        component.onClicked();

        expect(component.checked).toBe(true);
      });

      it(`should negate checked property if set to true'`, () => {
        component.checked = true;
        component.onClicked();

        expect(component.checked).toBe(false);
      });

      it(`should trigger toggle event with negated value'`, () => {
        spyOn(component.toggle, 'emit');

        component.checked = false;
        component.onClicked();

        expect(component.toggle.emit).toHaveBeenCalledWith(true);
      });

      it(`should not trigger toggle event if disabled'`, () => {
        spyOn(component.toggle, 'emit');

        component.disabled = true;
        component.onClicked();

        expect(component.toggle.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('markup', () => {
    describe('events', () => {
      it('should call appropriate handler when clicked host element', async(() => {
        spyOn(component, 'onClicked');

        fixture.debugElement.triggerEventHandler('click', {});

        expect(component.onClicked).toHaveBeenCalled();
      }));
    });

    describe('rendering', () => {
      it('should render switch markup', async(() => {
        expect(compiled.querySelector('.asm-switch')).not.toBeNull();
      }));

      describe('checked/unchecked', () => {
        it('should not render checked switch by default', async(() => {
          expect(compiled.querySelector('.asm-switch').classList).not.toContain('asm-switch--checked');
        }));

        it('should render checked switch if property is set to true', async(() => {
          component.checked = true;
          fixture.detectChanges();

          expect(compiled.querySelector('.asm-switch').classList).toContain('asm-switch--checked');
        }));

        it('should not render checked switch if property is set to false', async(() => {
          component.checked = false;
          fixture.detectChanges();

          expect(compiled.querySelector('.asm-switch').classList).not.toContain('asm-switch--checked');
        }));
      });

      describe('enabled/disabled', () => {
        it('should not render disabled switch if property is set to true', async(() => {
          component.disabled = false;
          fixture.detectChanges();

          expect(compiled.querySelector('.asm-switch').classList).not.toContain('asm-switch--disabled');
        }));

        it('should render disabled switch if property is set to true', async(() => {
          component.disabled = true;
          fixture.detectChanges();

          expect(compiled.querySelector('.asm-switch').classList).toContain('asm-switch--disabled');
        }));
      });
    });
  });
});
