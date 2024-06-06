import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../../auth-forms/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent  implements OnInit{

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {}
  
  registerForm: FormGroup | undefined;

  ngOnInit(): void {
    console.log('RegisterFormComponent::ngOnInit');
    this.registerForm = this._formBuilder.group({
      name:'',
      surname:'',
      email:'',
      password:''
    });
  }

  submitForm = () => {
      this._authService.register();
  }
}
