import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
    ) {
  }
  
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  activeRoute(routename: string): any{
    return this.router.url.indexOf(routename) > -1;
  }
}
