import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  value: number;

  constructor() { }

  ngOnInit() {
   this.value = 4.96;
  }

}
