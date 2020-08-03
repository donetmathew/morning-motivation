import { Component, OnInit, Input, Output,EventEmitter, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuoteComponent implements OnInit {

  @Input()config;
  @Output()addBalls= new EventEmitter();
  @Output()removeBalls= new EventEmitter();

  constructor() { }

  ngDoCheck(){
    console.log("donettt"); 
  }

  ngOnInit() {
    console.log(this.config);
  }

  add(){
    this.addBalls.emit("");
  }

  remove(){
    this.removeBalls.emit("");
  }

}
