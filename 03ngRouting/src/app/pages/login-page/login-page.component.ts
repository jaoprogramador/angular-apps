import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  email: string ='';
  password: string ='';

  ngOnInit(): void {
    let token =sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home']);
    }
    console.log('LoginPageComponent::ngOnInit');
  }
  loginUser() {
    this.authService.login( this.email ,this.password ).subscribe(
      response => {
        console.log('LoginPageComponent::loginUser', response);
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['contacts']);
        } 
      },
      error => {
        console.error('LoginPageComponent::loginUser: Error occurred al hacer el login', error);
      }
    );
  }
}

