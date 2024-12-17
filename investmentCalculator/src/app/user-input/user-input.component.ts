import { Component,  inject, signal } from '@angular/core';
import { InvestmentService } from '../investment-results/investment-results.sevice';
import {type InvestmentInput } from '../investment-results/investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',

})
export class UserInputComponent {
  // calculate = output<InvestmentInput>()
  // @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = signal("0")
  enteredAnnualInvestment = signal("0")
  enteredExpectedReturn = signal("5")
  enteredDuration = signal("10")

  private invSevice = inject(InvestmentService)

  onSubmit(){
    this.invSevice.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
    duration:+this.enteredDuration(),
     annualInvestment:+this.enteredAnnualInvestment(),
    expectedReturn:+this.enteredExpectedReturn()
   
    })
 
       this.enteredInitialInvestment.set("0")
       this.enteredAnnualInvestment.set("0")
       this.enteredExpectedReturn.set("5")
       this.enteredDuration.set("10")



  }

}
