import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from  '@angular/forms';
import { AuthService } from '../../../auth-forms/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup | undefined;

  constructor (private _formBuilder: FormBuilder, private _authService: AuthService) {}


  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username:'',
      email:''
    })
    console.log('LoginFormComponent::ngOnInit');
  }

  submitForm= () => {
    this._authService.login();
  }

}
