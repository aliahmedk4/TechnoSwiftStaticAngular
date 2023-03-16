import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCompanyComponent } from './register-company.component';



const routes: Routes = [
  {
    path: '',
    component: RegisterCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCompanyRoutingModule { }
