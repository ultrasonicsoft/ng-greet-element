import { Component } from '@angular/core';

@Component({
  selector: 'greet-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  sayHi(){
    alert("Hello World!!!");
  }
}
