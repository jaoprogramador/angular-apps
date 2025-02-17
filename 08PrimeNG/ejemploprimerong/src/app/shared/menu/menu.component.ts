/* import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  menuItems:MenuItem[]=[];


  ngOnInit(): void {
    this.menuItems = [
      {
        label:'Heroes',
        icon: 'pi pi-users',
        items:[
          {
            label: 'Agregar heroes',
            icon:'pi pi-users-plus'
          }
        ]
      },
      {
        label:'Pagination',
        icon: 'pi pi-filter-fill',
        routerLink: 'pagination'
      }
    ]
    //throw new Error('Method not implemented.');
  }

}
 */
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Heroes } from '../../interfaces/heroes.interface';
import { FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
//import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';  
@Component({
  selector: 'shared-menu',
  standalone: true,  
  imports: [CommonModule, MenubarModule, ReactiveFormsModule, AutoCompleteModule ],

  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // Si tienes un archivo CSS asociado
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  //AUTOCOMPLETE
  heroesComplete: Heroes[] = [];
  formGroup!: FormGroup;
  filteredHeroes!: Heroes[];
  
  constructor (private heroesSvc:HeroesService) {
    this.formGroup = new FormGroup({
      selectHero:new FormControl<object | null>(null)
    });
  }
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Heroes',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Agregar heroes',
            icon: 'pi pi-users-plus'
          }
        ]
      },
      {
        label: 'Pagination',
        icon: 'pi pi-filter-fill',
        routerLink: 'paginacion'  // Asegúrate de que esta ruta esté definida en tu enrutamiento
      }
    ];

    this.heroesSvc.heroes().subscribe(res=>{
      this.heroesComplete = res || []; 
      console.log('Menu::::this.heroesComplete',this.heroesComplete);
    }

    )
  }

  filterHero(event:any) {
    let filtered: any[] = [];
    let query = event.query;
    console.log('Menu::::filterHerothis.heroesComplete',this.heroesComplete);
    for (let i = 0; i < (this.heroesComplete as any[]).length; i++) {
        let heroe = (this.heroesComplete as any[])[i];
        if (heroe.superhero.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(heroe);
        }
    }

    this.filteredHeroes = filtered;
}

}
