import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrl: './formulario-validado.component.scss'
})
export class FormularioValidadoComponent implements OnInit{
  miFormularioValidado: FormGroup= new FormGroup({});

  constructor (private formBuilder: FormBuilder) {} 

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
        nombre : ['',Validators.required], //campo obligatorio
        apellidos : '',
        edad : ['', Validators.compose([Validators.required , 
          Validators.min(18) , Validators.max(99)])],//campo obligatorio con max y min
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
        //campo booleano obligatorio para checkboxes
        acepta: [false, Validators.requiredTrue]

    });
    console.log('FormularioValidadoComponent:::OnInit');
  }
  get nombre(){
    return this.miFormularioValidado.get('nombre');

  }
  get apellidos(){
    return this.miFormularioValidado.get('apellidos');

  }
  get email(){
    return this.miFormularioValidado.get('email');

  }
  get edad(){
    return this.miFormularioValidado.get('edad');

  }
  get password(){
    return this.miFormularioValidado.get('password');

  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');

  }
  //metodo de submit del formulario
  enviarFormulario(){
    //controlamos que formulario se válido
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      //resetear los campos del formulario
      this.miFormularioValidado.reset();
    }

  }

}
