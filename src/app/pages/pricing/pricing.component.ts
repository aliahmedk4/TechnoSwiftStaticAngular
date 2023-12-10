import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  isMonthlyChecked=true;
  ChangePricing(value:boolean){
    this.isMonthlyChecked=value;
  }
}
