import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechnoSwiftWeb';
  typeSelected='ball-fussion';

  constructor(
    private spinnerService: NgxSpinnerService,
    private companyService: CompanyService,
    private router:Router

    ) {

    this.companyService.showSpinner.subscribe(res=>{
      if(res){
        this.spinnerService.show();
      }
      else
      this.spinnerService.hide();
    })
    }
}
