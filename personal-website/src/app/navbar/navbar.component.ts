import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavItems: boolean = true;
  smallScreenSize: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.smallScreenSize = true;
          this.showNavItems = false;
        } else {
          this.smallScreenSize = false;
          this.showNavItems = true;
        }
      });
  }

  toggleHideNavItems(): void {
      this.showNavItems = !this.showNavItems;
  }

}
