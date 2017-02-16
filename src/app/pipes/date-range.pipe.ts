import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';

@Pipe({
  name: 'asmDateRange'
})
export class DateRangePipe implements PipeTransform {

  constructor( @Inject(LOCALE_ID) private locale: string) { }

  transform(dates: Date[]): string {
    if(!dates) {
      return '';
    }
    
    const datePipe = new DatePipe(this.locale);
    const from = datePipe.transform(dates[0], 'yMd') || '';
    const to = datePipe.transform(dates[1], 'yMd') || '';

    if(!from && !to) {
      return ''
    } else {
      return `${from} > ${to}`
    }
  }
}
