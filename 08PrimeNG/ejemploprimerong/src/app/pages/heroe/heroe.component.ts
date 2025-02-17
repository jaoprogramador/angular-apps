import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styles: ``
})
export class HeroeComponent implements OnInit{
  
  heroe!: Heroes;
  constructor (private heroesSvc:HeroesService, private activatedRouter:ActivatedRoute) {}

  ngOnInit()  {
    console.log('heroeDetalle::::INI');
    this.activatedRouter.params.subscribe(({id})=>{
      this.heroesSvc.heroesById(id).subscribe(res=>{
        this.heroe=res;
        console.log('heroe::::this.heroe',this.heroe);
      }

      )
    }
    
    )
    /* this.heroesSvc.heroes().subscribe(res=>{
      this.heroe=res
      console.log("heroe:::ngOnInit:::this.heroe",this.heroe);
    }) */
  }
}
