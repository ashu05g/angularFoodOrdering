export class UserLogin
{
    email:string;
    password:string;
    msg:string;

    constructor(email:string,password:string,msg:string)
    {
        this.email=email;
        this.password=password;
        this.msg=msg;
    }
}

export class Address
{
    address1:string
    landmark:string
    area:string
    city:string
    state:string
    pincode:number
    type:string

    constructor(address1:string,landmark:string,area:string,city:string,state:string,pincode:number,type:string)
    {
        this.address1=address1
        this.landmark=landmark
        this.area=area
        this.city=city
        this.state=state
        this.pincode=pincode
        this.type=type    
    }
}
export interface IUserDetails
{
    email:string;
    password:string
    firstName:string
    lastName:string
    contactNumber:number
    addresses:Array<Address>
    //msg:string
}
export class UserDetails implements IUserDetails
{
    email:string;
    password:string
    firstName:string
    lastName:string
    contactNumber:number
    addresses:Array<Address>
    //msg:string
    constructor(email:string,password:string,firstName:string,lastName:string,contactNumber:number,addresses:Array<Address>){
        this.email=email
        this.password=password
        this.firstName=firstName
        this.lastName=lastName
        this.contactNumber=contactNumber
        this.addresses=addresses
        //this.msg=msg;
    }
}
export class Menu{
    itemName:string
    itemType:string
    foodType:string
    price:number

    constructor(itemName:string,itemType:string,foodType:string,price:number)
    {
        this.itemName=itemName
        this.itemType=itemType
        this.foodType=foodType
        this.price=price
    }
}
export interface IHotelDetails
{
    _id:number
    hotelName:string
    hotelEmail:string
    hotelContactNo:number
    address:string
    city:string
    state:string
    pincode:number
    menu:Array<Menu>
}
export class HotelDetails implements IHotelDetails
{
    _id:number
    hotelName:string
    hotelEmail:string
    hotelContactNo:number
    address:string
    city:string
    state:string
    pincode:number
    menu:Array<Menu>

    constructor(hotelId:number,hotelName:string,hotelEmail:string,hotelContactNo:number,address:string,city:string,state:string,pincode:number,menu:Array<Menu>)
    {
        this._id=hotelId
        this.hotelName=hotelName
        this.hotelEmail=hotelEmail
        this.hotelContactNo=hotelContactNo
        this.address=address
        this.city=city
        this.state=state
        this.pincode=pincode
        this.menu=menu
    }
}
export class Item
{
    itemName:string
    itemType:string
    foodType:string
    price:number
    quantity:number

    constructor(itemName:string,itemType:string,foodType:string,price:number,quantity:number)
    {
        this.itemName=itemName
        this.itemType=itemType
        this.foodType=foodType
        this.price=price
        this.quantity=quantity
    }
}
export class OrderDetails
{
    orderDate:string
    hotelName:string
    hotelEmail:string
    userEmail:string
    totalAmount:number
    status:string
    paymentMode:string
    netItems:number
    items:Array<Item>

    constructor(orderDate:string,hotelName:string,hotelEmail:string,userEmail:string,totalAmount:number,status:string,paymentMode:string,netItems:number,items:Array<Item>)
    {
        this.orderDate=orderDate
        this.hotelName=hotelName
        this.hotelEmail=hotelEmail
        this.userEmail=userEmail
        this.totalAmount=totalAmount
        this.status=status
        this.paymentMode=paymentMode
        this.netItems=netItems
        this.items=items
    }
}