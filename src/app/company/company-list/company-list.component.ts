import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: []
})
export class CompanyListComponent implements OnInit {

  companys: any;

  constructor() {
  }

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

    console.log("----------- Company-List Component Load -----------");
  }

}
