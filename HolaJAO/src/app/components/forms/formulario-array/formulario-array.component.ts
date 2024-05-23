import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrl: './formulario-array.component.scss'
})
export class FormularioArrayComponent implements OnInit{
  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    console.log('FormularioArrayComponent:::ngOnInit');
    this.miFormularioArray= this.formBuilder.group(
      {
        nombre: '', 
        apellidos:'', 
        telefonos: this.formBuilder.array([]) //inicializamos la lista de tlf vacía      
      }      
    )
  }
  //metodo getter para obtener el FormArray de la lista de telefonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray;
  }
  //metodo setter para añadir el FormArray a la lista de telefonos
  anadirTelefonos(){
    const telefonoNuevo = this.formBuilder.group({
      prefijo:'',
      numero:''
    })
  //añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }
  //eliminamos tlf por indice
  eleminarTelefonos(index:number){
    this.telefonosFormulario.removeAt(index);
  }
    
  
}




