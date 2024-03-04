import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './pages/component/common/layouts/basicLayout.component';

const routes: Routes = [
  // {path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'index', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'privacy', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: 'pricing', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'shipping', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/shippingpolicy/shippingpolicy.module').then(m => m.ShippingPolicyModule)
  },
  {
    path: 'contactus', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactUsModule)
  },
  {
    path: 'termsandcondition', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'refundpolicy', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/refundpolicy/refundpolicy.module').then(m => m.RefundPolicyModule)
  },
  {
    path: 'registercompany', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/register-company/register-company.module').then(m => m.RegisterCompanyModule)
  },
  {
    path: 'registerpartner', component: BasicLayoutComponent,
    loadChildren: () => import('./pages/register-partner/register-partner.module').then(m => m.RegisterPartnerModule)
  }
  // ,{path: '**',  redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
