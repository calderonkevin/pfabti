import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left.component.html',
})
export class LeftComponent  {
    title:string = "News";
    items:Array<string> = ["Welcome", "Welcome #2"];
    dato:string = "00";

    addItem():void{
        this.dato = Math.random().toString();
        this.items.push(this.dato);


    }
 }
