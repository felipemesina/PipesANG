import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  timeAndDate: Date;

  constructor() { }

  ngOnInit() {
    this.timeAndDate = new Date();
  }

}
