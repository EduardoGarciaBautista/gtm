import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare global {
  interface Window {
    dataLayer: any;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tagg';
  constructor(private router: Router) {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      window.dataLayer.push({
        event: 'pageview',
        path: event['urlAfterRedirects'],
        title: 'titulo: ' + event['urlAfterRedirects']
      }); // push an empty object to trigger a new event
    })
  }
}
