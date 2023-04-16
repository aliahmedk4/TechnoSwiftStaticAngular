import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'basic',
  templateUrl: 'basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent {
  hideFooter: boolean = true;

  public ngOnInit():any {
  }

  public onResize(){
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);

        if (val.url == '/contactus') {
          this.hideFooter = true;
        } else {
          this.hideFooter = false;
        }
      }
    });
  }

}
