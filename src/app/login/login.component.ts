import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserLogin } from '../model/userLogin';
import { DbOperationService } from '../db-operation.service';
import { HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isnotvalid:boolean
  message: string
  userLogin:UserLogin;

  constructor(private router:Router,private dbServ:DbOperationService,private cookieService:CookieService) { }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });
  get email() { return this.loginForm.get('email');}
  get password() { return this.loginForm.get('password');}

  ngOnInit() {
    console.log('IN Login Compomnent')
    this.isnotvalid=false;
  }

  onLoginSubmit()
  {
    console.log(this.loginForm.value)
    this.userLogin=new UserLogin(this.loginForm.controls.email.value,this.loginForm.controls.password.value,this.message)

    this.dbServ.loginUser(this.userLogin).subscribe(data=>{
     
      console.log(data)
      this.message=data["success"]
      console.log(this.message)

      if(this.message=="no")
      {
        this.isnotvalid=true
        console.log('Error is there') 
      }
      else
      {
        this.cookieService.set('user',data["email"])
        const cookieExists: boolean = this.cookieService.check('user');
        console.log(cookieExists)
        this.router.navigate(['userHome'])
      }
    })
  }
  
  onRegister()
  {
    this.router.navigate(['register'])
  }
}
