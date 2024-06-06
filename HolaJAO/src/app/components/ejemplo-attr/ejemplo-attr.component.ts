import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-attr',
  templateUrl: './ejemplo-attr.component.html',
  styleUrl: './ejemplo-attr.component.scss'
})
export class EjemploAttrComponent implements OnInit {

  color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

