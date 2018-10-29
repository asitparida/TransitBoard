import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { fromEvent } from 'rxjs';
import * as _ from 'lodash';
import { DestinationsInfo } from './data';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarComponent implements OnInit, AfterViewInit {
  keySubscription;
  currentIndex = null;
  depTime = new Date();
  audioEl;
  higlighted = false;
  islandOtions = DestinationsInfo;
  debouncedReset = _.debounce(this.reset, 15000);

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.keySubscription = fromEvent(document, 'keyup').subscribe(e => {
      if ((e as KeyboardEvent).key === 'Escape') {
        this.reset();
      } else if ((e as KeyboardEvent).key === 'ArrowUp') {
        if (this.currentIndex === null) {
          this.currentIndex = 0;
        }
        this.currentIndex = this.currentIndex - 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.islandOtions.length - 1;
        }
        this.activateIsland(this.islandOtions[this.currentIndex].id, 'UP');
        // this.debouncedReset();
      } else if ((e as KeyboardEvent).key === 'ArrowDown') {
        if (this.currentIndex === null) {
          this.currentIndex = -1;
        }
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.islandOtions.length) {
          this.currentIndex = 0;
        }
        this.activateIsland(this.islandOtions[this.currentIndex].id, 'DOWN');
        // this.debouncedReset();
      }
    });
    this.appService.islandHighlighted$.subscribe((data) => {
      if (data) {
        this.higlighted = true;
      } else {
        this.higlighted = false;
      }
    });
  }

  ngAfterViewInit() {
    this.audioEl = document.createElement('audio');
    this.audioEl.src = 'assets/button-16.mp3';
  }

  reset() {
    this.audioEl.currentTime = 0;
    this.audioEl.play();
    this.currentIndex = null;
    this.appService.highlightIsland(null);
  }

  activateIsland(id, direction) {
    this.audioEl.currentTime = 0;
    this.audioEl.play();
    this.appService.highlightIsland(id, direction);
  }
}
