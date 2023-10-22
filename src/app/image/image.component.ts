import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

import { Observable, fromEvent } from 'rxjs/';

import { PoI, backgrounds, pointsOfInterest } from '../poi';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  template: `
    <img #background " ></img>
  `
})
export class ImageComponent implements AfterViewInit {

  art = [...backgrounds];
  locations = [...pointsOfInterest].filter // filter to only the initial image
  current = 0; // index of the currently loaded background image
  img = document.getElementById(this.art[this.current].name);
  @ViewChild('background') image: ElementRef | undefined; // 
  dimensions = [-1, -1] // dimensions of the image
  origin = [-1, -1]; // origin coordinates for the image
  bounds = [-1, -1] // furthest bounds for the image
  mouse = [-1, -1] // coordinates of the mouse
  isOverImage = false;
  constructor(
  ) { }




  // while the mouse is inside the image, continuously check its coordinates. If they match 
  onMouseEnter() {

    // Setting bounds
    this.dimensions = [this.image?.nativeElement.clientWidth, this.image?.nativeElement.clientHeight]
    this.origin = [this.image?.nativeElement.x, this.image?.nativeElement.y]
    this.bounds = [this.origin[0] + this.dimensions[0], this.origin[1] + this.dimensions[1]];

    console.log(this)
    console.log(this.origin, this.bounds)
    console.log(this.art[this.current]);

  }

  onMouseMove(event: MouseEvent) {
    // check if coords are within bounds. if they are, and are on a cool spot display something
    // iteration: based on the current image, load all poi that are connected to that image

    var mouseOnImg = [event.clientX, event.clientY]; // these mouse coordinates are from the screen, a check will need to be done to see 
    var absX = mouseOnImg[0] / this.bounds[0]
    var absY = mouseOnImg[1] / this.bounds[1]
    this.mouse = [absX, absY]

    //console.log(event)
    // if they fall over the corresponding image coordinates. 
    console.log("perc ("+absX+","+absY+"): mouse ("+mouseOnImg[0]+", "+mouseOnImg[1]+"): dim("+this.dimensions[0]+", "+this.dimensions[1]+"): org("+this.origin[0]+", "+this.origin[1]+"): bounds("+this.bounds[0]+", "+this.bounds[1]+")")
    
  
    //if (mouseOnImg[0] >= this.origin[0] && this.mouse[0] <= this.bounds[0]) {
      //if (this.mouse[1] >= this.origin[1] && this.mouse[1] <= this.bounds[1]) {
        // Do the location check for PoI in the current image
        //console.log(this.art[this.current].lore)
      //}
    //}
  }

  onMouseExit() {
    console.log("We're out")
    this.isOverImage = false
  }

  // Cycle through art forwards
  // Should load all relevant points of interest
  forward() {
    if (this.current + 1 < this.art.length) {
      this.current++;
      this.img = document.getElementById(this.art[this.current].name)
      console.log(this)
    }
    else alert('There is only Noise beyond this point.')
  }

  // Cycle through art backwards
  // Should load all relevant points of interest
  backward() {
    if (this.current - 1 >= 0) {
      this.current--;
      this.img = document.getElementById(this.art[this.current].name)
    }
    else alert('There is only Noise beyond this point.')
  }

  // on page load. use this to load all ponts of interest for the base image
  ngOnInit() {
    //alert("this happens on initialization!")
  }

  ngAfterViewInit(): void {
    this.img = this.image?.nativeElement;
    console.log(this.img)
    console.log('dddddddd')
  }

}
