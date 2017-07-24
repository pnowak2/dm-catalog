import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoordinatesModule } from './coordinates/coordinates.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    CoordinatesModule
  ]
})
export class SharedModule { }
