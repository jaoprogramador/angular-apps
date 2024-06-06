import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  token : string | null ='';
  constructor (private router: Router){}
  ngOnInit(): void {
    this.token=sessionStorage.getItem('token');
    console.log('AppComponent::ngOnInit');
  }
  loggOut(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  title = '03ngRouting';
}
