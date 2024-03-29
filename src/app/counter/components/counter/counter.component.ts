import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template:`
  <h3>counter: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetBy()">reset</button>
  `
})
export class CounterComponents{
  public title: string = 'Hello word';
  public counter:number = 10;

  increaseBy(value: number):void{

    this.counter +=value;
  }
  resetBy(){
    this.counter =10;
  }
}
