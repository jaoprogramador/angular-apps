import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
  //definimos nuestro formulario
  //miFormulario: FormGroup | undefined;
  miFormulario: FormGroup = new FormGroup({});
  
  //inyectamos la clase FormBuilder para construir el FormGroup
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    console.log('FormularioComponent:::ngOnInit');
    //iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );
    //nos subscribimos a los cambios que ocurran  em el formulario y los mostramos en consola
    //========================================================================================
    //forma 1
    this.miFormulario.valueChanges.subscribe(
      console.log
    );
    //forma 2
    this.miFormulario.valueChanges.subscribe(
      (valor)=> {
        console.log(valor);
      }
      
    );
    
  }


}
