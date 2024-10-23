import { Component, OnInit } from '@angular/core';
import { DbOperationService } from '../db-operation.service';
import { IHotelDetails, HotelDetails, Menu, UserDetails, OrderDetails, Item} from '../model/userLogin';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  isOrdered:boolean
  isOnMenu:boolean
  isItemSelected:boolean
  selectedCity:boolean
  public hotels:Array<HotelDetails>
  hotelSelected:boolean
  hotelName:string
  hotelEmail:string
  //public menus:Array<Menu>
  public items:Array<Item>
  userName:string
  public userDetails:UserDetails
  public orderDetails:OrderDetails
  
  constructor(private dbServ:DbOperationService,private cookieService:CookieService,private router:Router) { }
  
  ngOnInit() {
    this.isOrdered=false
    this.selectedCity=false
    this.hotelSelected=false
    this.isOnMenu=true
    this.isItemSelected=true
    console.log('In User Home')
    console.log(this.cookieService.get('user'))
    if(this.cookieService.get('user'))
    {
      this.dbServ.UserHome(this.cookieService.get('user')).subscribe(data=>{
        console.log(data);
        this.userDetails=new UserDetails(data.email,data.password,data.firstName,data.lastName,data.contactNumber,data.addresses);
        console.log(this.userDetails)
        this.userName=this.userDetails['firstName']
      });
    }
    else{
      this.router.navigate(['login'])
    }
  }

  onLogoutClick(){
    this.cookieService.delete('user');
    console.log("cookie deleted and logging out")
    this.router.navigate([''])
  }
  
  setHotels(hotels:Array<HotelDetails>)
  {
    this.hotels=hotels
  }

  onManageClick(){
    this.router.navigate(['manageUser'])
  }

  changeInCity(newValue)
  {
    this.isOrdered=false
    this.isOnMenu=true
    console.log('Change in select')
    console.log(newValue.target.value)
    var cityname=newValue.target.value
    if(cityname!="Select City")
    {
      this.selectedCity=true
      this.hotelSelected=false
      this.dbServ.showHotelDetails(cityname).subscribe(data=>{
        console.log('In Subscribe Method')
        var hotelData:Array<HotelDetails>=new Array<HotelDetails>()

        data.forEach(function(hd){
          var menusOfHotel:Array<Menu>=new Array<Menu>()
          var j;
          for(j=0;j<hd.menu.length;j++)
          {
            menusOfHotel.push(new Menu(hd.menu[j].itemName,hd.menu[j].itemType,hd.menu[j].foodType,hd.menu[j].price))
          }
          hotelData.push(new HotelDetails(hd._id,hd.hotelName,hd.hotelEmail,hd.hotelContactNo,hd.address,hd.city,hd.state,hd.pincode,menusOfHotel))  
        })
        this.setHotels(hotelData)
        console.log(this.hotels)
      })
    }
    else
    {
      this.selectedCity=false
      this.hotelSelected=false
    }
  }

  onHotelClick(newValue)
  {
    this.isOnMenu=false
    this.items=new Array<Item>()
    //this.menus=new Array<Menu>()
    this.hotelSelected=true
    this.selectedCity=false
    console.log(newValue)
    this.hotelName=newValue
    var i,j;
    for(i=0;i<this.hotels.length;i++)
    {
      if(this.hotels[i].hotelName==newValue)
      {
        console.log(this.hotels[i])
        this.hotelEmail=this.hotels[i].hotelEmail
        //this.menus=this.hotels[i].menu
        for(j=0;j<this.hotels[i].menu.length;j++)
        {
          this.items.push(new Item(this.hotels[i].menu[j].itemName,this.hotels[i].menu[j].itemType,this.hotels[i].menu[j].foodType,this.hotels[i].menu[j].price,0))
        }
        //this.orderDetails=new OrderDetails()
        console.log(this.items)
        break;
      }
    }
  }

  onMinus(newValue)
  {
    var k;
    var count:number=0
    for(k=0;k<this.items.length;k++)
    {
      if(this.items[k].itemName==newValue)
      {
        if(this.items[k].quantity>0)
        {
          this.items[k].quantity-=1
        }      
      }
      if(this.items[k].quantity==0)
      {
        count++;
      }
    }
    if(count==this.items.length)
    {
      this.isItemSelected=true
    }
    console.log(this.items)
  }
  
  onPlus(newValue)
  {
    this.isItemSelected=false
    var k;
    for(k=0;k<this.items.length;k++)
    {
      if(this.items[k].itemName==newValue)
      {
          this.items[k].quantity=this.items[k].quantity+1
          break;
      }
    }
    console.log(this.items)  
  }

  onMakePayment()
  {
    this.isOrdered=true
    var today=new Date()
    var month=today.getMonth()+1
    var date:string=today.getDate()+"/"+month+"/"+today.getFullYear()
    console.log(date)
    var itemsOrdered:Array<Item>=new Array<Item>()
    var totalAmount:number=0
    var netItems:number=0
    var k
    for(k=0;k<this.items.length;k++)
    {
      if(this.items[k].quantity>0)
      {
        itemsOrdered.push(this.items[k])
        totalAmount=totalAmount+this.items[k].quantity*this.items[k].price
        netItems=netItems+this.items[k].quantity
      }
    }
    console.log(itemsOrdered)
    console.log(this.hotelName)
    console.log(this.hotelEmail)
    this.orderDetails=new OrderDetails(date,this.hotelName,this.hotelEmail,this.userDetails.email,totalAmount,"pending","Cash On Delievery",netItems,itemsOrdered)
    console.log(this.orderDetails)
  }

  placeOrder()
  {
    this.dbServ.orderPlace(this.orderDetails).subscribe(data=>{
      console.log(data)
      var message=data['message']
      console.log(message)
      if(message=="Success")
      {
        alert("Your Order is placed successfully")
        this.isOrdered=false
        this.isOnMenu=true
        this.isItemSelected=false
        this.selectedCity=false
        this.hotelSelected=false
      }
    })
  }

  goToHotels()
  {
    this.isOrdered=false
    this.hotelSelected=false
    this.isItemSelected=false
    this.selectedCity=true
    this.isOnMenu=true
  }
}
