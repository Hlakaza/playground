import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() navOrientation = false;
  slides: any;
  slideIndex = 0;
  slideDirection = '';
  showLeftArrow: boolean;
  showRightArrow: boolean;
  ticks = 0;
  timer: Observable<number>;
  subscription: Subscription;
  subject = new Subject();
  moreInfoContent: any;
  gameId: any;

  constructor() {
    this.slides = [];
    this.showRightArrow = true;

    this.timer = Observable.timer(2000, 4000);
    this.subscription = this.timer.subscribe(t => {
      this.carouselTimer(t);
    });
  }
  ngOnInit() {

  }
  carouselTimer(tick) {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }
  }
    // Go to next slide
    next(slideIndex) {
      if (slideIndex < this.slides.length - 1) {
        this.slideIndex++;
        this.slideDirection = 'right';
      } else {
        this.slideIndex = 0;
      }
    }

    // Go to previous slide
    prev(slideIndex) {
      if (slideIndex > 0) {
        this.slideIndex--;
        this.slideDirection = 'left';
      } else {
        this.slideIndex = this.slides.length - 1;
      }
    }

    // Go to specific slide
    goToSlide(slideIndex) {
      this.slideIndex = slideIndex;
    }
    pause(pauseState) {
      if (pauseState) {
        // stop timer
        this.subscription.unsubscribe();
      } else {
        // start timer
        this.subscription = this.timer.subscribe(t => {
          this.carouselTimer(t);
        });
      }
    }
}
