import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [],
  exports:[
    MenubarModule ,
    ButtonModule,
    PanelModule,
    CardModule,
    AutoCompleteModule
  ],
})
export class PrimengModule { }
