import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserLogin, UserDetails, IUserDetails, IHotelDetails, OrderDetails } from './model/userLogin';
import { Observable, throwError, of } from 'rxjs';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DbOperationService {

  private _url1 :string = "http://localhost:8000/loginUser"
  private _url2 :string = "http://localhost:8000/registerUser"
  private _url3 :string = "http://localhost:8000/getHotels"
  private _url4 :string = "http://localhost:8000/userHome"
  private _url5 :string = "http://localhost:8000/manageUser"
  private _url6 :string = "http://localhost:8000/deleteUser"
  private _url7 :string = "http://localhost:8000/insertOrder"

  constructor(private http: HttpClient) { }

  loginUser(user:UserLogin)
  {
    console.log(user)
    var user1=JSON.stringify(user)
    console.log(user1)
    return this.http.post(this._url1,user1,httpOptions)
  }
  
  registerUser(userData:UserDetails)
  {
    console.log(userData)
    var user1=JSON.stringify(userData)
    console.log(user1)
    return this.http.post(this._url2,user1,httpOptions)
  }

  showHotelDetails(city:string):Observable<IHotelDetails[]>
  {
    var hotel1={"city":city}
    console.log(hotel1)
    return this.http.post<IHotelDetails[]>(this._url3,hotel1,httpOptions)
  }

  UserHome(userEmail:string):Observable<IUserDetails>
  {
    console.log('In User Home')
    var user1={"email":userEmail}
    console.log(user1)
    return this.http.post<IUserDetails>(this._url4,user1,httpOptions)
  }

  UpdateUser(userData:UserDetails):Observable<any>
  {
    console.log(userData)
    var user1=JSON.stringify(userData)
    console.log(user1)
    return this.http.post(this._url5,user1,httpOptions)
  }

  DeleteUser(userEmail:string):Observable<any>
  {
    var user1={"email":userEmail}
    console.log(user1)
    return this.http.post(this._url6,user1,httpOptions)
  }

  orderPlace(order:OrderDetails)
  {
    var order1=JSON.stringify(order)
    console.log(order1)
    return this.http.post(this._url7,order1,httpOptions)
  }

}

