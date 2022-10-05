import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent implements OnInit {

  student: any;

  constructor() { }

  ngOnInit(): void {
    this.student = [
      {
        "std": 8,
        "name": "sachin"
      },
      {
        "std": 9,
        "name": "mayur"
      },
      {
        "std": 10,
        "name": "bhavesh"
      },
      {
        "std": 11,
        "name": "vijay"
      },
      {
        "std": 12,
        "name": "hiren"
      },
    ]
  }

}
