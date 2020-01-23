import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'client-b',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-b';
  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.debug('params', params);
    });

    window.addEventListener('client-message', e => console.debug('client-message event', e));
  }
}
