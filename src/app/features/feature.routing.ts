import {RouterModule, Routes} from '@angular/router';
import * as CONST from '../core/constants';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
const routes: Routes = [
  {path: '', redirectTo: CONST.frontendUrl.AUTH, pathMatch: 'full'},
  {path: CONST.frontendUrl.DASHBOARD, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: CONST.frontendUrl.CUSTOMER_MANAGER, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  {path: CONST.frontendUrl.SELLING, loadChildren: () => import('./selling/selling.module').then(m => m.SellingModule)},
  {path: CONST.frontendUrl.USER_MANAGER, loadChildren: () => import('./user/User.module').then(m => m.UserModule)},
  {path: CONST.frontendUrl.CD_MANAGER, loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: CONST.frontendUrl.AUTH, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: CONST.frontendUrl.NOT_FOUND, component: NotFoundComponent}
];
export const AppRoutes = RouterModule.forRoot(routes);
