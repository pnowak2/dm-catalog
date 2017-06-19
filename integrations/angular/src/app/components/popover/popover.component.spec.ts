import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { PopoverComponent } from './popover.component';

fdescribe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('Creation', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Api', () => {
    describe('.title', () => {
      it(`should be set to undefined`, () => {
        expect(component.title).toBeUndefined();
      });
    });

    describe('.showCloseIcon', () => {
      it(`should be set to false`, () => {
        expect(component.showCloseIcon).toBe(false);
      });
    });

    describe('.onBeforeShow', () => {
      it(`should be instance of event emitter`, () => {
        expect(component.onBeforeShow).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('.onAfterShow', () => {
      it(`should be instance of event emitter`, () => {
        expect(component.onAfterShow).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('.onBeforeHide', () => {
      it(`should be instance of event emitter`, () => {
        expect(component.onBeforeHide).toEqual(jasmine.any(EventEmitter));
      });
    });

    describe('.onAfterHide', () => {
      it(`should be instance of event emitter`, () => {
        expect(component.onAfterHide).toEqual(jasmine.any(EventEmitter));
      });
    });
  });
});
