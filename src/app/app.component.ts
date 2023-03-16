import { Component } from '@angular/core';
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

    ) {
    this.typeSelected = 'ball-fussion';
    this.spinnerService.show();

    this.companyService.showSpinner.subscribe(res=>{
      if(res){
        this.spinnerService.show();
      }
      else
      this.spinnerService.hide();
    })
    }
}
