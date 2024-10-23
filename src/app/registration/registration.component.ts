import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Address,UserDetails } from '../model/userLogin';
import { DbOperationService } from '../db-operation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  exists:boolean=false
  userAddress:Array<Address>
  userData:UserDetails
  message:string=''

  constructor(private router:Router,private dbServ:DbOperationService) { }

  signinForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
    confirm_password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
    first_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    last_name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    contact_num:new FormControl('',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
    address1:new FormControl('',[Validators.required]),
    landmark:new FormControl('',[Validators.required]),
    area:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d{5}$/)])
  });


  get first_name() { return this.signinForm.get('first_name');}
  get last_name() { return this.signinForm.get('last_name');}
  get email() { return this.signinForm.get('email');}
  get password() { return this.signinForm.get('password');}
  get confirm_password() { return this.signinForm.get('confirm_password');}
  get contact_num() { return this.signinForm.get('contact_num');}
 // get passcheck() { return this.signinForm.get('password')===this.signinForm.get('confirm_password')?null : {notSame:true}}
  get address1() { return this.signinForm.get('address1');}
  get landmark() { return this.signinForm.get('landmark');}
  get area() { return this.signinForm.get('area');}
  get city() { return this.signinForm.get('city');}
  get state() { return this.signinForm.get('state');}
  get pincode() { return this.signinForm.get('pincode');}

  ngOnInit() {
  } 

  onSignin()
  {
    this.userAddress=[new Address(this.signinForm.controls.address1.value,
                                  this.signinForm.controls.landmark.value,
                                  this.signinForm.controls.area.value,
                                  this.signinForm.controls.city.value,
                                  this.signinForm.controls.state.value,
                                  this.signinForm.controls.pincode.value,
                                  'Home')]
    this.userData=new UserDetails(this.signinForm.controls.email.value,
                                  this.signinForm.controls.password.value,
                                  this.signinForm.controls.first_name.value,
                                  this.signinForm.controls.last_name.value,
                                  this.signinForm.controls.contact_num.value,
                                  this.userAddress)

    console.log(this.userData)
    this.dbServ.registerUser(this.userData).subscribe(data=>{
      this.message=data["message"]
      
      if(this.message!="exists")
      {
        this.exists=false
        this.router.navigate(['login'])
      }
      else
      {
        this.exists=true
        //this.router.navigate(['userHome'])
      }
      
    })
    /*console.log(this.exists)
    console.log(this.message)
    if(this.message!="exists"){
      this.router.navigate(['/login'])
    }*/
  }
  
  onCancel()
  {
    this.router.navigate([''])
  }

  onLoginClick()
  {
    this.router.navigate(['login'])
  }
}
