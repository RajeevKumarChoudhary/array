import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  input;
  array = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];
  duplicate = [];
  unique = [];
  index = 0;

  constructor() { }

  ngOnInit() {

  }

  hello() {
    for (let a of this.array) {
      if (this.input == a) {
        this.duplicate.push(this.input);
      }
    }

    for (let a of this.array) {
      if (this.input != a) {
        this.index += 1;
      }
      else {
        break;
      }
    }

    if (this.index !== -1) {
      this.array.splice(this.index, 1);
    }

    this.unique.push(this.array);

  }


}
