import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petInsurance';

  premiums:number[] = [1000,1200,1400,1600];
  lastPremium=0;
  lastAddOnPremium=0;
  flagPremium=false;

  addOnPremiums:number[] = [20,30,40,50];
  totalPremium:number = 0;

  onCoverage(premium:number)  {
    this.totalPremium -= this.lastPremium;
    this.totalPremium += premium;
    this.lastPremium = premium;
  }

  onAddOn(addOnPremium : number)  {
    this.totalPremium -= this.lastAddOnPremium;
    this.totalPremium += addOnPremium;
    this.lastAddOnPremium = addOnPremium;
  }

}
