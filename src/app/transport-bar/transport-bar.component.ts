import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { fromEvent } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarComponent implements OnInit {
  keySubscription;
  currentIndex = null;
  // tslint:disable max-line-length
  depTime = new Date();
  islandOtions = [
    {
      id: 'ORCAS',
      destination: 'Orcas Island',
      connection: true,
      status: 'BOARDING',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Roche Harbour', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ],
      options: [
        { mode: 'train', code : 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'ONTIME' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'ONTIME' }
      ]
    },
    {
      id: 'STUART',
      destination: 'Stuart Island',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 120, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 'LOPEZ',
      destination: 'Lopez Island',
      connection: true,
      status: 'BOARDING',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Friday Harbour', departureTime: new Date(), arrivalAt: 'Stuart Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ],
      options: [
        { mode: 'train', code : 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 'SHAW',
      destination: 'Shaw Island',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 50, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Lopez Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' },
      options: [
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 'FRIDAY',
      destination: 'Friday Harbour',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 20, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 'ROCHE',
      destination: 'Roche Harbour',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 150, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
      ]
    }
  ];
  debouncedReset = _.debounce(this.reset, 5000);

  constructor(private appService: AppService) { }

  ngOnInit() {
    // setTimeout(() => {
    //   // this.appService.highlightIsland('ORCAS');
    // }, 2000);
    this.keySubscription = fromEvent(document, 'keyup').subscribe(e => {
      if ((e as KeyboardEvent).key === 'ArrowUp') {
        if (this.currentIndex === null) {
          this.currentIndex = 0;
        }
        this.currentIndex = this.currentIndex - 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.islandOtions.length - 1;
        }
        this.activateIsland(this.islandOtions[this.currentIndex].id);
        // this.debouncedReset();
      } else if ((e as KeyboardEvent).key === 'ArrowDown') {
        if (this.currentIndex === null) {
          this.currentIndex = -1;
        }
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.islandOtions.length) {
          this.currentIndex = 0;
        }
        this.activateIsland(this.islandOtions[this.currentIndex].id);
        // this.debouncedReset();
      }
    });
  }

  reset() {
    this.appService.highlightIsland(null);
  }

  activateIsland(id) {
    this.appService.highlightIsland(id);
  }
}
