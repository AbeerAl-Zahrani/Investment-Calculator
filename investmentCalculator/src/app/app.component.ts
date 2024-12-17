import { Component, inject, signal } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment-results/investment-results.sevice';
import type { Investment, InvestmentInput } from './investment-results/investment-input.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  resultsData = signal<Investment[] | undefined>(undefined)

  // resultsData?:Investment[]

}
