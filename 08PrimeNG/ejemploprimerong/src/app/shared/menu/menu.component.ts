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

@Component({
  selector: 'shared-menu',
  standalone: true,  
  imports: [CommonModule, MenubarModule],

  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // Si tienes un archivo CSS asociado
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

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
  }
}
