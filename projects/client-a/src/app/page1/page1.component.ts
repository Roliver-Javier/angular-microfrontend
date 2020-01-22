import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {

  control = new FormControl();
  constructor(private router: Router) { }
  ngOnInit() { }
  search() {
        this.router.navigate(['.'], { queryParamsHandling: 'merge', queryParams: { id: 17 }});
        window.dispatchEvent(new CustomEvent('client-message', { detail: 17 }));
    }
}
