import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './pages/component/common/layouts/basicLayout.component';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
  // {
  //   path: '',component: BasicLayoutComponent,
  //   loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  // },
  {
    path: 'index',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'privacy',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: 'shipping',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/shippingpolicy/shippingpolicy.module').then(m => m.ShippingPolicyModule)
  },
  {
    path: 'contactus',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactUsModule)
  },
  {
    path: 'refundpolicy',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/refundpolicy/refundpolicy.module').then(m => m.RefundPolicyModule)
  },
  {
    path: 'registercompany',component: BasicLayoutComponent,
    loadChildren: () => import('./pages/register-company/register-company.module').then(m => m.RegisterCompanyModule)
  },
  {path: '**',  redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
