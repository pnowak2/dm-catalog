/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavstackComponent } from './navstack.component';

describe('NavstackComponent', () => {
  let component: NavstackComponent;
  let fixture: ComponentFixture<NavstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
