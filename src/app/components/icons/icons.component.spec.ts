/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconsListComponent } from './icons-list.component';

describe('IconsListComponent', () => {
  let component: IconsListComponent;
  let fixture: ComponentFixture<IconsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
