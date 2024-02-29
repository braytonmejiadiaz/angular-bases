import { NgModule } from "@angular/core";
import { CounterComponents } from "./components/counter/counter.component";


@NgModule({
  declarations:[
    CounterComponents
  ],
  exports:[
    CounterComponents
  ]
})
export class counterModule{

}
