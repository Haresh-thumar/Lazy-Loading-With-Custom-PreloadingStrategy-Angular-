import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: []
})
export class PersonListComponent implements OnInit {

  companys: any;

  constructor() { }

  ngOnInit(): void {
    this.companys = [
      {
        "code": "001",
        "Name": "HCL"
      },
      {
        "code": "002",
        "Name": "TCS"
      },
      {
        "code": "003",
        "Name": "Nokia"
      },
    ];

    console.log("----------- person-List Component Load -----------");
  }

}
