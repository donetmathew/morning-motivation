import { Component, OnInit, ViewChild, ElementRef, Input,SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { isEmbeddedView } from '@angular/core/src/view/util';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParticleComponent implements OnInit {

  constructor() { }
  @ViewChild('particleCanvas',{read:ElementRef})canvas:ElementRef;
  @Input() config;
  public ctx:CanvasRenderingContext2D;
  particleArray=new Array();

  ngOnChanges(changes:SimpleChanges){
    this.config=changes.config.currentValue;
    this.createParticle();
    this.animate();
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    this.ctx.canvas.width=window.innerWidth;
    this.ctx.canvas.height=window.innerHeight;
    this.createParticle();
    this.animate();
    //this.draw(particle);
  }

  createParticle(){  
    for(let i=0;i<this.config.snowBallCount;i++){
      let particle={}
      let radius=Math.random() * this.config.radius;
      let x=Math.random() * (innerWidth-radius * 2);
      let y=Math.random() * (innerWidth-radius * 2);
      let dx=(Math.random()*this.config.velocity)-0.2;
      let dy=(Math.random()*this.config.velocity)-0.2;
      let color=this.config.color;
      particle["x"]=x;
      particle["y"]=y;
      particle["dx"]=dx;
      particle["dy"]=dy;
      particle["radius"]=radius;
      particle["color"]=color;
      this.particleArray.push(particle);
    }
  }

  draw(item){
    this.ctx.beginPath();
    this.ctx.arc(item.x,item.y,item.radius,0,Math.PI*2,false);
    this.ctx.fillStyle=item.color;
    this.ctx.fill();
  }

  update(item){
    if(item.x + item.radius > this.ctx.canvas.width || (item.x - item.radius < 0)){
      item.dx=-item.dx;
    }
    if(item.y + item.radius > this.ctx.canvas.height || (item.y - item.radius < 0)){
      item.dy=-item.dy;
    }
    item.x += item.dx;
    item.y += item.dy;
    this.draw(item);
  }

  animate(){
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0,0,innerWidth,innerHeight);
    this.particleArray.map((el)=>{
      this.update(el);
    })

  }

  onResize(e){
    this.ctx.canvas.width=window.innerWidth;
    this.ctx.canvas.height=window.innerHeight;
    this.createParticle();
    this.animate();

  }
}
