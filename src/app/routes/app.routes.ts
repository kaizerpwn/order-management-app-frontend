import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthLayoutComponent } from '../shared/components/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../core/pages/login/login.component';
import { DashboardLayoutComponent } from '../shared/components/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from '../core/pages/dashboard/dashboard.component';
import { RegisterComponent } from '../core/pages/register/register.component';
import { OrdersComponent } from '../core/pages/orders/orders.component';
import { UsersComponent } from '../core/pages/users/users.component';
import { ProductsComponent } from '../core/pages/products/products.component';

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
    path: 'register',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        title: 'Sign up - Order Management',
        component: RegisterComponent
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
  {
    path: 'orders',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Orders - Order Management',
        component: OrdersComponent
      }, 
    ]
  },
  {
    path: 'users',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Users - Order Management',
        component: UsersComponent
      }, 
    ]
  },
  {
    path: 'products',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        title: 'Products - Order Management',
        component: ProductsComponent
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
