import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  // styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  result:string = '';
  expression: string='';
  numbers: string[] = ['1','2','3','4','5','6','7','8','9','0']
  operators: string[] = ['+','-','*','/']
  addToExp (value: string) {
    this.expression += value;
  }
  clearExp(){
    this.expression='';
    this.result='';
  }
  evalexpression() {
    try {
      this.result = eval(this.expression).toString();
    } catch (error) {
      this.result = "Invalid Expression"
    }

}}


