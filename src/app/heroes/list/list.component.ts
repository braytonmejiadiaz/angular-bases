import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames :string[] = ['spiderman', 'hulk', 'thor', 'ironman'];
  public deleteHeroLast?:string ;
  deleteHero():void{
   this.deleteHeroLast = this.heroNames.pop();

  }

}
