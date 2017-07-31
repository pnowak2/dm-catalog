import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeometryModule } from './geometry/geometry.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    GeometryModule
  ]
})
export class SharedModule { }
