import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  date: Date;
  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
