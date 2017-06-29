import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { OffClickModule } from './off-click/off-click.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [],
  exports: [
    OffClickModule
  ]
})
export class DirectivesModule { }
