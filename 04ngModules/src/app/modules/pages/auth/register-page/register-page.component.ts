import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth-forms/services/auth.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit{
  registerForm: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {};

  ngOnInit(): void {
    console.log('RegisterPageComponent::ngOnInit');
    
    this.registerForm = this._formBuilder.group({
      name:'',
      surname:'',
      email:'',
      password:''
    })
  }
  submitForm = () => {
    this._authService.register
  }

}
