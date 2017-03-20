/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavDividerComponent } from './nav-divider.component';

describe('NavDividerComponent', () => {
  let component: NavDividerComponent;
  let fixture: ComponentFixture<NavDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
