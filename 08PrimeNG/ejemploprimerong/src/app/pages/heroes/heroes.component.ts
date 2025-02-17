import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styles: ``
})
export class HeroesComponent implements OnInit{
  
  heroes:Heroes[]=[];
  constructor (private heroesSvc:HeroesService) {}

  ngOnInit()  {
    this.heroesSvc.heroes().subscribe(res=>{
      this.heroes=res;
      console.log("heroes::ngOnInit:::this.heroes",this.heroes)
    })
  }
}
