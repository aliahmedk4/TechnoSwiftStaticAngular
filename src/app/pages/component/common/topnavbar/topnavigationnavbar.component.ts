import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'topnavigationnavbar',
  templateUrl: 'topnavigationnavbar.template.html'
})
export class TopNavigationNavbarComponent {

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
  }

}
