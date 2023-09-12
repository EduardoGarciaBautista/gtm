import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event': 'pageview',
      'path': this.router.url,
      'title': 'Me screen: ' + this.router.url,
    });
  }

  public goTo() {
    window.dataLayer.push({
      event: 'navigation',
      action: 'Click',
      path: '/me_component',
    });
  }

}
