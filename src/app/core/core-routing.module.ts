import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from "./core.component";


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: '../pages/home/home.module#HomeModule'},
      {path: 'welcome', loadChildren: '../pages/welcome/welcome.module#WelcomeModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
