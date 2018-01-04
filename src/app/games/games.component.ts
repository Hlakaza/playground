import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() gameInfo: any;
  @Input() skeleton: any;
  @Output() register = new EventEmitter<any>();
  @Output() gameLaunch = new EventEmitter<any>();
  hover: boolean = false;
  tileImage: string;
  isNew: string;
  heat: number;
  gameId: number;
  gameName: string;
  isMobile: boolean;
  LPId: any;
  GP: any;
  BackgroundImage: any;
  constructor() { }

  mouseEnter() {
    this.hover = true;
  }
  mouseExit() {
    this.hover = false;
  }

  ngOnInit() {
    if (this.gameInfo !== undefined) {
      this.tileImage = "https://cdn1.dmgamingsystems.com" + this.gameInfo.tileImage;
      this.isNew = this.gameInfo.isNewGN;
      this.heat = this.gameInfo.heat;
      this.gameId = this.gameInfo.gameId;
      this.gameName = this.gameInfo.GN;
      this.isMobile = this.gameInfo.isMobile;
      this.LPId = this.gameInfo.LPId;
      this.BackgroundImage = "https://cdn2.dmgamingsystems.com" + this.gameInfo.BackgroundImage;
      if (this.gameInfo["GameInfoCode"] !== undefined) {
        this.GP = this.gameInfo["GameInfoCode"]["GameProvider"];
      }
    }
  }

}
