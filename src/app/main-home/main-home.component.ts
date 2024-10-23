import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onLogin()
  {
    console.log('Transferring to login')
    this.router.navigate(['/login'])
  }

  public onSignin()
  {
    this.router.navigate(['/register'])
  }
}
