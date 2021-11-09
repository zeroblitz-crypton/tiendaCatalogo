import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloPage } from './ciclo.page';

const routes: Routes = [
  {
    path: '',
    component: CicloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloPageRoutingModule {}
