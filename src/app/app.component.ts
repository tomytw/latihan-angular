import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tomy';
  item = [
    {'nama':'kelengkeng','harga':1000},
    {'nama':'jeruk','harga':15000}
    ];
}
