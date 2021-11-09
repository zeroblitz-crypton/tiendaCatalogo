import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'registracatalogo',
    loadChildren: () => import('./pages/registracatalogo/registracatalogo.module').then( m => m.RegistracatalogoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'detalle-equipo',
    loadChildren: () => import('./pages/detalle-equipo/detalle-equipo.module').then( m => m.DetalleEquipoPageModule)
  },
  {
    path: 'ciclo',
    loadChildren: () => import('./pages/ciclo/ciclo.module').then( m => m.CicloPageModule)
  },
  {
    path: 'planes',
    loadChildren: () => import('./pages/planes/planes.module').then( m => m.PlanesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
