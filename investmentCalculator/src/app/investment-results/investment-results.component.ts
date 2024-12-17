import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from './investment-results.sevice';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<Investment[]>()
// @Input() results?:Investment[]

private invService = inject(InvestmentService)
results = computed(() => this.invService.getInvestements())

}
