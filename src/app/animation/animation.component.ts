import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("openClose",[
      state('open',style({
        height: "500px",
        backgroundColor: "aqua"
      })),
      state('open',style({
        height: "500px",
        backgroundColor: "coral"
      })),
      transition("open=>close",[
        animate("2s")
      ]),
      transition("close=>open",[
        animate("2s")
    ])
  ])
  ]
})
export class AnimationComponent implements OnInit {
isOpen=true
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
this.isOpen=!this.isOpen
}
}
