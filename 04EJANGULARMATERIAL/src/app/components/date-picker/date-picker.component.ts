import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit{

  formularioReserva: FormGroup = new FormGroup({});
  
  constructor(private FormBuilder:FormBuilder){
    const hoy = new Date();
    const mes = hoy.getMonth();
    const anio = hoy.getFullYear();

    this.formularioReserva = this.FormBuilder.group({
      desde: new FormControl(new Date(anio, mes, 17)),
      hasta:new FormControl(new Date(anio, mes, 25))
    })
    
  }
  ngOnInit(): void {
    


  console.log('DatePickerComponent:::ngOnInit')  }
  /*campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });*/


}
