import { Routes } from '@angular/router';
import { Products } from './Components/products/products';
import { Orders } from './Components/orders/orders';
import { Users } from './Components/users/users';
import { NotFounded } from './Components/not-founded/not-founded';
import { Login } from './Components/login/login';
import { AdminLayout } from './Components/admin-layout/admin-layout';
import { authGuard } from './Core/Guards/auth-guard';
import { isloggedGuard } from './Core/Guards/islogged-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login ,canActivate:[isloggedGuard]},
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: Products ,canActivate:[authGuard] },
      { path: 'orders', component: Orders },
      { path: 'customers', component: Users },
    ],
  },
  { path: '**', component: NotFounded },
];
