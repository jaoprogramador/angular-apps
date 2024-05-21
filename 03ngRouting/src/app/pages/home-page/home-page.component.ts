import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  constructor ( private router : Router){}
  ngOnInit(): void {
    console.log('HomePageComponent::ngOnInit');
  }

  navegarAContacts(){
    console.log('HomePageComponent::navegarAContacts');
    this.router.navigate(['/contacts']);
    
  }

}
