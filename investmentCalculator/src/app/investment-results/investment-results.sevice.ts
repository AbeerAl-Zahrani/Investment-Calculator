import { calculateInvestmentResults } from '../../investment-results'
import {type InvestmentInput} from './investment-input.model'
export class InvestmentService{
//  investements!:Array<T>
    
constructor(){
    
}
    addInv(InvData:InvestmentInput){
          calculateInvestmentResults(InvData.initialInvestment,InvData.duration,InvData.expectedReturn,InvData.annualInvestment)
        // console.log(this.investements);
        
      
      
}
getInvestements(){
    // return this.investements
}
    }
