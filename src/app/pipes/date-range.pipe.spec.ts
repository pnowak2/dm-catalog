/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DateRangePipe } from './date-range.pipe';

describe('DateRangePipe', () => {
  it('create an instance', () => {
    const pipe = new DateRangePipe('fr-fr');
    expect(pipe).toBeTruthy();
  });
});
