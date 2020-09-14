import {RouterModule, Routes} from '@angular/router';
import * as CONST from '../core/constants';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
const routes: Routes = [
  {path: '', redirectTo: CONST.frontendUrl.AUTH, pathMatch: 'full'},
  {path: CONST.frontendUrl.DASHBOARD, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: CONST.frontendUrl.AUTH, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: CONST.frontendUrl.NOT_FOUND, component: NotFoundComponent}
];
export const AppRoutes = RouterModule.forRoot(routes);
