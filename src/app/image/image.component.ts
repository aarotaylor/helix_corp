import { Component } from '@angular/core';
import { PoI, backgrounds } from '../poi';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  art = [...backgrounds];
  current = 0;

  constructor(
  ){  }

  // potential function: ~~clicking~~ hovering over certain (x,y) coordinates reveals part of the story

  // Cycle through art forwards
  forward(){
    if (this.current+1 < this.art.length) this.current++
    else alert('There is only Noise beyond this point.')
  }

  // Cycle through art backwards
  backward(){
    if (this.current-1 >= 0) this.current--
    else alert('There is only Noise beyond this point.')
  }

  ngOnInit(){ 

  }

}
