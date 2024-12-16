import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { InvestmentService } from '../investment-results/investment-results.sevice';
import {type InvestmentInput } from '../investment-results/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = "0"
  enteredAnnualInvestment = "0"
  enteredExpectedReturn = "5"
  enteredDuration = "10"

  // private inv = inject(InvestmentService)

  onSubmit(){
    this.calculate.emit({
         initialInvestment:+this.enteredInitialInvestment,
       duration:+this.enteredDuration,
        annualInvestment:+this.enteredAnnualInvestment,
       expectedReturn:+this.enteredExpectedReturn
      
       })
// this.inv.addInv({
//   initialInvestment:Number(this.enteredInitialInvestment),
//   duration:Number(this.enteredDuration),
//   annualInvestment:Number(this.enteredAnnualInvestment),
//   expectedReturn:Number(this.enteredExpectedReturn)

// })
console.log("k");

  }

}
