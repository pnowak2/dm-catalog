import { NgModule, ModuleWithProviders, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
