import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private sidebarVisible = false;

  constructor() { }

  sidebarToggle() {
      const body = document.getElementsByTagName('body')[0];

      if (!this.sidebarVisible) {
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
  }

  ngOnInit() {
  }

}
