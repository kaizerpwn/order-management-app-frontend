import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthLayoutComponent } from '../shared/components/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../core/pages/login/login.component';
import { DashboardLayoutComponent } from '../shared/components/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from '../core/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        title: 'Sign in - Order Management',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        title: 'Sign in - Order Management',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Dashboard - Order Management',
        component: DashboardComponent
      }, 
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
