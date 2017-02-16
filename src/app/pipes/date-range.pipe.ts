import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  constructor( @Inject(LOCALE_ID) private locale: string) { }

  transform(dates: Date[]): string {
    const from = new DatePipe(this.locale).transform(dates[0], 'yMd') || '';
    const to = new DatePipe(this.locale).transform(dates[1], 'yMd') || '';

    return `${from} > ${to}`;
  }
}
