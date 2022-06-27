import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
  
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/img/theme/img1-sava.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../../assets/img/theme/img2-sava.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../../assets/img/theme/img3-sava.jpg"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
