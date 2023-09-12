import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event': 'pageview',
      'path': this.router.url,
      'title': 'My title: ' + this.router.url,
    });
  }

  public goTo() {
    window.dataLayer.push({
      event: 'navigation',
      action: 'Click',
      path: '/welcome',
    });
  }

}
