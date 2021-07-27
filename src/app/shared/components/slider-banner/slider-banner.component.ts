import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.css'],
  
})
export class SliderBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  
  slides = [
    {id: 1, img: "assets/images/slide1.jpg"},
    {id: 2, img: "assets/images/slide2.jpg"},
    {id: 3, img: "assets/images/slide3.jpg"}
  ];
}

