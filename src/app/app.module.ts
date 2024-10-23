import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { DbOperationService } from './db-operation.service';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainHomeComponent,
    UserHomeComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DbOperationService,CookieService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
