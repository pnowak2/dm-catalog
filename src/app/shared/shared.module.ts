import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from '../components/card/card.module';
import { FamilyCompositionModule } from '../components/family-composition/family-composition.module';
import { IconsModule } from '../components/icons/icons.module';
import { NavStackModule } from '../components/nav-stack/nav-stack.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { SwitchModule } from '../components/switch/switch.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
