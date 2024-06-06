import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
//importamos lo necesario para construir el form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({});
 @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService ){}

  ngOnInit(): void {
    console.log('Method not implemented.');
    this.loginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', Validators.compose([Validators.required, Validators.email])], // Corregido uso de compose      
      password: ['', Validators.required]
    }

    )
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  //submit login
  submitLogin(){
    if(this.loginForm.valid){
     // console.table(this.loginForm.value);
      //TODO peticiona authService
      this.loginAction.emit(this.loginForm.value);
      //this.loginForm.reset();
    }
  }

}
