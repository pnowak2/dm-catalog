import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    CardComponent
  ],
  declarations: [
    CardComponent
  ]
})
export class CardModule { }
