import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import { ListUserComponent } from './pages/list-user/list-user.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ListUserComponent}
]
@NgModule({
  declarations: [ListUserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class UserModule {}
