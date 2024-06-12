import { CurrencyPipe } from '@angular/common';
import { Component, Input,computed,inject,input } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    
  //constructor(private investmentservice: InvestmentService){  }
  
  private investementservice = inject(InvestmentService);

  // get results(){
  //   return this.investementservice.resultData;
  // }

//--------------------in case of signals we can use a computed( ) instead of get results()------------------

    results = computed(()=>this.investementservice.resultData());
  // results = input<{
    //   year: number,
    //   interest: number,
    //   valueEndOfYear: number,
    //   annualInvestment: number,
    //   totalInterest: number,
    //   totalAmountInvested: number,
    // }[]>();


    // @Input() results?:{
    //   year: number,
    //   interest: number,
    //   valueEndOfYear: number,
    //   annualInvestment: number,
    //   totalInterest: number,
    //   totalAmountInvested: number,
    // }[];
}
