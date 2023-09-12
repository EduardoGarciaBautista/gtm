import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event': 'pageview',
      'path': this.router.url,
      'title': 'FINAL screen: ' + this.router.url,
    });
  }

  public goTo() {
    window.dataLayer.push({
      event: 'navigation',
      action: 'Click',
      path: '/final_component',
    });
  }

}
