import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template: `
    <h2>Contact Us</h2>
    <p><b>Haresh Thumar</b></p>
    <p><b>Category : Angular Module Routing</b></p>
  `,
  styles: []
})
export class ContactusComponent implements OnInit {

  constructor() {
    console.warn("---- ContactUs Component Load ----");
   }

  ngOnInit(): void {
    
  }

}
