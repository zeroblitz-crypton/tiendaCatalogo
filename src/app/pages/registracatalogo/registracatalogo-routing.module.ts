import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistracatalogoPage } from './registracatalogo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistracatalogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistracatalogoPageRoutingModule {}
