import { Component, OnInit } from '@angular/core';
//importamos de reactive forms
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrl: './formulario-anidado.component.scss'
})
export class FormularioAnidadoComponent implements OnInit{
  miFormularioAnidado: FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    console.log('Method not implemented.');
    const telefonoFijo= this.formBuilder.group(
      {
        prefijo:'',
        numero:''
      }
    )

    const telefonoMovil= this.formBuilder.group(
      {
        prefijo:'',
        numero:''
      }
    )

    ///agrupacion del formulario
    this.miFormularioAnidado = this.formBuilder.group({      
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil
    })
  }

}
