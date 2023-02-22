import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

import { Observable, fromEvent } from 'rxjs/';

import { PoI, backgrounds } from '../poi';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  template: `
    <img #background></img>
  `
})
export class ImageComponent implements AfterViewInit{
  
  art = [...backgrounds];
  current = 0; // index of the currently loaded background image
  img = document.getElementById(this.art[this.current].name);
  @ViewChild('background') image: ElementRef | undefined; // 
  width = -1; // width of the currently loaded background image
  height = -1; // height of the currently loaded background image
  // ----------- origin coordinates for the image
  originX = -1;
  originY = -1;

  // ----------- furthest bounds for the image
  boundX = -1
  boundY = -1
  // -----------

  constructor(
  ){  }


  
  // while the mouse is inside the image, continuously check its coordinates. If they match 
    onMouseEnter(){
      
      // Setting bounds
      this.width = this.image?.nativeElement.clientWidth;
      this.height = this.image?.nativeElement.clientHeight;
      this.originX = this.image?.nativeElement.x
      this.originY = this.image?.nativeElement.y
      this.boundX = this.originX + this.width;
      this.boundY = this.originY + this.height;

      console.log("The bounded image has vertices at: ")
      console.log(this.originX, this.originY)
      console.log(this.boundX, this.originY)
      console.log(this.originX, this.boundY)
      console.log(this.boundX, this.boundY)
      
      /* While mouse coordinate x is within bounds and mouse coordinate y is in bounds
        The loop runs until it gets an exit event.
          while looping, get the 
      */

      /*
      Observable.fromEvent(this, 'mousemove').subscribe(e => {
        console.log(e.pageX, e.pageY)
      })
      */
    }

    onMouseExit(){
      console.log("We're out")
      /*
      Observable.fromEvent(this, 'mousemove').subscribe(e => {
        console.log(e.pageX, e.pageY)
      })
      */
    }

  // Cycle through art forwards
  forward(){
    if (this.current+1 < this.art.length){
      this.current++;
      this.img = document.getElementById(this.art[this.current].name)
      console.log(this)
    } 
    else alert('There is only Noise beyond this point.')
  }

  // Cycle through art backwards
  backward(){
    if (this.current-1 >= 0) {
      this.current--;
      this.img = document.getElementById(this.art[this.current].name)
    }
    else alert('There is only Noise beyond this point.')
  }

  ngOnInit(){ 

  }

  ngAfterViewInit(): void {
    this.img = this.image?.nativeElement;
    console.log(this.img)
    console.log('dddddddd')
  }

}
