import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { CuentalistComponent } from './components/cuentalist/cuentalist.component';
import { TranDetailsComponent } from './components/tran-details/tran-details.component';
import { TransacComponent } from './components/transac/transac.component';

const routes: Routes = [
  {path:'',component:CuentalistComponent},
  {path:'main',component:CuentalistComponent},
  {path:'cuenta/:id',component:CuentaComponent},
  {path:'transactlist/:id',component:TransacComponent},
  {path:'transact/:id',component:TranDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
