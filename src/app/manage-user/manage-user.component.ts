import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Address,UserDetails } from '../model/userLogin';
import { DbOperationService } from '../db-operation.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  exists:boolean=false
  userAddress:Array<Address>
  userData:UserDetails
  message:string=''

  cookieValue:string
  userDetails:UserDetails
  updateForm:any

  constructor(private router:Router,private dbServ:DbOperationService,private cookieService:CookieService) { console.log("hello") }

  
check(){
  this.updateForm=new FormGroup({
    email:new FormControl(this.userDetails.email,[Validators.required,Validators.email]),
    password:new FormControl(this.userDetails.password,[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
    first_name:new FormControl(this.userDetails.firstName,[Validators.required,Validators.minLength(3)]),
    last_name:new FormControl(this.userDetails.lastName,[Validators.required,Validators.minLength(3)]),
    contact_num:new FormControl(this.userDetails.contactNumber,[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
    address1:new FormControl(this.userDetails.addresses[0].address1,[Validators.required]),
    landmark:new FormControl(this.userDetails.addresses[0].landmark,[Validators.required]),
    area:new FormControl(this.userDetails.addresses[0].area,[Validators.required]),
    city:new FormControl(this.userDetails.addresses[0].city,[Validators.required]),
    state:new FormControl(this.userDetails.addresses[0].state,[Validators.required]),
    pincode:new FormControl(this.userDetails.addresses[0].pincode,[Validators.required,Validators.pattern(/^[0-9]\d{5}$/)])
  });
}
  

  get first_name() { return this.updateForm.get('first_name');}
  get last_name() { return this.updateForm.get('last_name');}
  get email() { return this.updateForm.get('email');}
  get password() { return this.updateForm.get('password');}
  get confirm_password() { return this.updateForm.get('confirm_password');}
  get contact_num() { return this.updateForm.get('contact_num');}
 // get passcheck() { return this.updateForm.get('password')===this.updateForm.get('confirm_password')?null : {notSame:true}}
  get address1() { return this.updateForm.get('address1');}
  get landmark() { return this.updateForm.get('landmark');}
  get area() { return this.updateForm.get('area');}
  get city() { return this.updateForm.get('city');}
  get state() { return this.updateForm.get('state');}
  get pincode() { return this.updateForm.get('pincode');}

  ngOnInit() {
    console.log(this.cookieService.check('user'));
    this.dbServ.UserHome(this.cookieService.get('user')).subscribe(data=>{
      console.log(data);
      this.userDetails=new UserDetails(data.email,data.password,data.firstName,data.lastName,data.contactNumber,data.addresses);
      console.log(this.userDetails)
      this.check();
    })
  } 
  
  onUpdate()
  {
    this.userAddress=[new Address(this.updateForm.controls.address1.value,
                                  this.updateForm.controls.landmark.value,
                                  this.updateForm.controls.area.value,
                                  this.updateForm.controls.city.value,
                                  this.updateForm.controls.state.value,
                                  this.updateForm.controls.pincode.value,
                                  'Home')]
    this.userData=new UserDetails(this.updateForm.controls.email.value,
                                  this.updateForm.controls.password.value,
                                  this.updateForm.controls.first_name.value,
                                  this.updateForm.controls.last_name.value,
                                  this.updateForm.controls.contact_num.value,
                                  this.userAddress)

    console.log(this.userData)
    this.dbServ.UpdateUser(this.userData).subscribe(data=>{
      this.message=data["message"]
      
      if(this.message!="Failure")
      {
        this.exists=true
      }
      else
      {
        this.exists=false
      }
      
    })
    /*console.log(this.exists)
    console.log(this.message)
    if(this.message!="exists"){
      this.router.navigate(['/login'])
    }*/
  }
  
  onBack()
  {
    this.router.navigate(['userHome'])
  }

  onDelete(){
    alert("sure You Want To Delete Your Account??")
    this.dbServ.DeleteUser(this.cookieService.get('user')).subscribe(data=>data)
    this.cookieService.delete('user');
    alert("Account Deleted")
    this.router.navigate([''])
  }
}
