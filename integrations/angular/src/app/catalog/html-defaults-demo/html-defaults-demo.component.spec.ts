import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDefaultsDemoComponent } from './html-defaults-demo.component';

describe('HtmlDefaultsDemoComponent', () => {
  let component: HtmlDefaultsDemoComponent;
  let fixture: ComponentFixture<HtmlDefaultsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDefaultsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDefaultsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
