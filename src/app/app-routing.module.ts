import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from './main-home/main-home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { GuardService as Guard} from './guard.service';
import { ManageUserComponent } from './manage-user/manage-user.component'

const routes: Routes = [
  {path:'',component: MainHomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegistrationComponent},
  {path:'userHome',component: UserHomeComponent,canActivate:[Guard]},
  {path:'manageUser',component: ManageUserComponent,canActivate:[Guard]},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
