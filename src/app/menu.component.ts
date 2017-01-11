import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items = [
    {'name' : 'Home', 'routerLink' : '/', 'icon' : 'home'},
    {'name' : 'Hello World', 'routerLink' : '/hello', 'icon' : 'block comment icon'},
    {'name' : 'User List', 'routerLink' : '/userlist', 'icon' : 'block user icon'},
    {'name' : 'Simple Reddit', 'routerLink' : '/redditsimple', 'icon' : 'block book icon'},
    {'name' : 'Login Form', 'routerLink' : '/login', 'icon' : 'block browser icon'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
