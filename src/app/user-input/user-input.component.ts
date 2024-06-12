import { Component, EventEmitter, Output, signal,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
//@Output() calculate = new EventEmitter< InvestmentInput>();
//calculate = output<InvestmentInput>()
enteredInitialInvestment=signal('0');
enteredAnnualInvestment=signal('0');
enteredExpectedReturn=signal('5');
enteredDuration=signal('10');

constructor(private investmentservice: InvestmentService){}
 onSubmit(){
  this.investmentservice.calculateInvestmentResults({
    
    initialInvestment:+this.enteredInitialInvestment(),
    annualInvestment:+this.enteredAnnualInvestment(),
    expectedReturn:+this.enteredExpectedReturn(),
    duration:+this.enteredDuration()
  })

  /*
  this.calculate.emit({
    
    initialInvestment:+this.enteredInitialInvestment(),
    annualInvestment:+this.enteredAnnualInvestment(),
    expectedReturn:+this.enteredExpectedReturn(),
    duration:+this.enteredDuration()
  })*/
 }
}
