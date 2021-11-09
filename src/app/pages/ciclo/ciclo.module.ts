import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloPageRoutingModule } from './ciclo-routing.module';

import { CicloPage } from './ciclo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloPageRoutingModule
  ],
  declarations: [CicloPage]
})
export class CicloPageModule {}
