import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffClickDirective } from './off-click.directive';

@NgModule({
  imports: [CommonModule],
  exports: [OffClickDirective],
  declarations: [OffClickDirective]
})
export class OffClickModule { }
