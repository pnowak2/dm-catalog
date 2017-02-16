/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DateRangePipe } from './date-range.pipe';

describe('DateRangePipe', () => {
  let pipe: DateRangePipe;

  beforeEach(() => {
    pipe = new DateRangePipe('fr-fr');
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format properly when both dates provided', () => {
    const parsed = pipe.transform([new Date(2017, 1, 14), new Date(2018, 2, 16)]);
    expect(parsed).toEqual('14/02/2017 > 16/03/2018');
  });

  it('should format properly when start date provided', () => {
    const parsed = pipe.transform([new Date(2017,1,14)]);
    expect(parsed).toEqual('14/02/2017 > ');
  });

  it('should format properly when end date provided', () => {
    const parsed = pipe.transform([, new Date(2018, 2, 16)]);
    expect(parsed).toEqual(' > 16/03/2018');
  });

  it('should format properly when no dates provided', () => {
    const parsed = pipe.transform([]);
    expect(parsed).toEqual('');
  });

  it('should format properly when undefined provided', () => {
    const parsed = pipe.transform(undefined);
    expect(parsed).toEqual('');
  });
});
