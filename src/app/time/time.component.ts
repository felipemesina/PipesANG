import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  currentTime: Date;
  constructor() { }

  ngOnInit() {
    this.currentTime = new Date();
  }

}
