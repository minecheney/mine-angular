import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  /*{ path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },*/
  {path: '', loadChildren: './core/core.module#CoreModule'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
