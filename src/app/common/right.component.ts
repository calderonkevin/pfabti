import { Component } from '@angular/core';

@Component({
  selector: 'app-right-content',
  templateUrl: './right.component.html',
})
export class RightComponent  { 
  title:string = "News";
  items:Array<string> = ["Welcome", "Welcome #2"];
  dato:string = "3";
  employees = [
    {'id': '1', 'name': 'Fazt', position: 'manager', email:'email@email.com'},
    {'id': '2', 'name': 'Juan', position: 'Designer', email:'email@email.com'},
    {'id': '3', 'name': 'Pedro', position: 'Programmer', email:'email@email.com'}
  ];

  addItem():void{
      this.dato = (parseFloat(this.dato) + 1).toString();
      this.employees.push({'id': this.dato, 'name': 'Fazt '+ Math.random().toString(), position: 'manager', email:'email@email.com'});
  }
  consoleLog():void{
    console.log(this.employees);
  } 
}

