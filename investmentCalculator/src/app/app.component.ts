import { Component, inject } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment-results/investment-results.sevice';
import type { Investment, InvestmentInput } from './investment-results/investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[UserInputComponent,HeaderComponent,InvestmentResultsComponent]
})
export class AppComponent {
  resultsData?:Investment[]
 calculateInvestmentResults(data:InvestmentInput) {
  const {initialInvestment,duration,expectedReturn,annualInvestment} = data
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  this.resultsData = annualData
    
  }
}
