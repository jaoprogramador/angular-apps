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
  //email: string ='';
  //password: string ='';

  ngOnInit(): void {
    let token =sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home']);
    }
    console.log('LoginPageComponent::ngOnInit');
  }
  //loginUser(email: string ,password: string) {
    loginUser(value: any) {
      let {email,password} = value;
    this.authService.login( email ,password ).subscribe(
      response => {
        console.log('LoginPageComponent::loginUser', response);
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          //this.router.navigate(['contacts']);
          //this.router.navigate(['home']);
          this.router.navigate(['/dashboard']);
        } 
      },
      error => {
        console.error('LoginPageComponent::loginUser: Error occurred al hacer el login', error);
      }
    );
  }
}

