import { Component, OnInit } from '@angular/core';
import { Constants } from './../../config/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  models: any = Constants.CARS;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
    nav: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
