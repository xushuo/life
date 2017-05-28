import {Component, OnInit, ViewChild} from '@angular/core';
import {LifeComponent} from "./life/life.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.test();
  }

  title = 'app works!';
  @ViewChild('lifeCp')
  lifeCpmt: LifeComponent;

  test() {
    this.lifeCpmt.logIt("fffffffffff");
  }

}
