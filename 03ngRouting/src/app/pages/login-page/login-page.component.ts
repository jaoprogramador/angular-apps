import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    let token =sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home']);
    }
    console.log('LoginPageComponent::ngOnInit');
  }
  loginUser(){
    console.log('LoginPageComponent::loginUser');
    sessionStorage.setItem('token','12345');
    this.router.navigate(['contacts']);
  }
  

}
