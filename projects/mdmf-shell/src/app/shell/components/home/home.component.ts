import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  emps = ['test', 'john'];
  
  checkEmpsExistance(empName) {
    return this.emps.indexOf(empName) ? true : false;
  }

  addEmp(empName) {
    if(!this.checkEmpsExistance(empName)) {
      this.emps.push('hello');
    }
  }

  removeEmp() {
    this.emps.pop();
  }

  save(data) {
    switch(data) {
      case '1': this.emps.push('hi'); break;
      case '2': this.emps.push('sample'); break;
      default: break;
    }
  }
}
