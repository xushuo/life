import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,
  Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  name: string;

  logIt(msg: string){
    console.log(`#${logIndex++} ${msg}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt("ngOnChanges:"+name)
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck:"+name)
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit:"+name)
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked:"+name)
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit:"+name)
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked:"+name)
  }

  ngOnDestroy(): void {
    this.logIt("ngOnDestroy:"+name)
  }

  constructor() {
    this.logIt("constructor:"+name)
  }

  ngOnInit() {
    this.logIt("ngOnInit:"+name)
  }

}
