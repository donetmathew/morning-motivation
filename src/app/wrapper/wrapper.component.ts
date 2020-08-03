import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {quotes} from '../../assets/data/quotes';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {

  constructor(private cd:ChangeDetectorRef) { }
  public index;
  public quotes;
  public particleConfig={
    color:"#ffffff",
    velocity:0.8,
    snowBallCount:100,
    radius:3
  }


  ngOnInit() {
    this.quotes=quotes;
    this.index=Number(this.randomNumber(0,quotes.length-1));
    
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  add($event){
    this.particleConfig.snowBallCount+=20;
    this.particleConfig=Object.assign({},this.particleConfig);
  }

  remove($event){
    this.particleConfig.snowBallCount-=20;
    debugger;
    this.particleConfig=Object.assign({},this.particleConfig);
  }
    
}
