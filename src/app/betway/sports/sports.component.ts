import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
 isMobile: boolean;
  ngOnInit() {
    if (window.innerWidth < 1000) {
       this.isMobile = true;
      console.log('isMobile', this.isMobile);
    }
  }

}
