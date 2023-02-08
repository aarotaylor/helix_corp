import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { PoI, backgrounds } from '../poi';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  template: `
    <img #myImage></img>
  `
})
export class ImageComponent implements AfterViewInit{
  
  art = [...backgrounds];
  current = 0; // index of the currently loaded background image

  @ViewChild('myImage') myImage: ElementRef | undefined;
  img = document.getElementById('SYAKSA'); // 
  currentX = this.art[this.current]; // width of the currently loaded background image
  currentY = 0; // height of the currently loaded background image

  constructor(
  ){  }

  // potential function: ~~clicking~~ hovering over certain (x,y) coordinates reveals part of the story

  // Cycle through art forwards
  forward(){
    console.log(this.art[this.current+1].name)
    if (this.current+1 < this.art.length){
      this.current++;
      this.img = document.getElementById(this.art[this.current].name)
      console.log(this.art[this.current].name)
      
    } 
    else alert('There is only Noise beyond this point.')
  }

  // Cycle through art backwards
  backward(){
    if (this.current-1 >= 0) {
      this.current--;
    }
    else alert('There is only Noise beyond this point.')
  }

  ngOnInit(){ 

  }

  ngAfterViewInit(): void {
    this.img = this.myImage?.nativeElement;
    console.log(this.img)
    console.log('dddddddd')
  }

}
