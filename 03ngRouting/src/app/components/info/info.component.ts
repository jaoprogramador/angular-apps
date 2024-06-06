import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit{
  ngOnInit(): void {
    console.log('InfoComponent::OnInit');
  }
  

}
