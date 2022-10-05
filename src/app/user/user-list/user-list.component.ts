import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = [
      {
        "email": "haresh@gurukul.org"
      },
      {
        "email": "rutvik@gurukul.org"
      },
      {
        "email": "rushabh@gurukul.org"
      },
      {
        "email": "parth@gurukul.org"
      },
      {
        "email": "rajan@gurukul.org"
      },
      {
        "email": "rajesh@gurukul.org"
      },
      {
        "email": "parth@gurukul.org"
      },
    ]
  }

}
