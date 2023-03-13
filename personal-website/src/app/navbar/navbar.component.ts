import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideNavItems: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHideNavItems(): void {
    this.hideNavItems = !this.hideNavItems;
  }//1024

}
