import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistracatalogoPageRoutingModule } from './registracatalogo-routing.module';

import { RegistracatalogoPage } from './registracatalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistracatalogoPageRoutingModule
  ],
  declarations: [RegistracatalogoPage]
})
export class RegistracatalogoPageModule {}
