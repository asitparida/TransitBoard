import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarComponent implements OnInit {

  // tslint:disable max-line-length
  depTime = new Date();
  islandOtions = [
    {
      id: 1,
      destination: 'Orcas Island',
      connection: true,
      status: 'DELAYED',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Roche Harbour', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ]
    },
    {
      id: 2,
      destination: 'Orcas Island',
      connection: false,
      standalone: true,
      status: 'DELAYED',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 120, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' }
    },
    {
      id: 3,
      destination: 'Stuart Island',
      connection: true,
      status: 'ONTIME',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Friday Harbour', departureTime: new Date(), arrivalAt: 'Stuart Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ]
    },
    {
      id: 4,
      destination: 'Lopez Island',
      connection: false,
      standalone: true,
      status: 'DEPARTED',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 50, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Lopez Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' }
    },
    {
      id: 5,
      destination: 'Friday Harbour',
      connection: false,
      standalone: true,
      status: 'DEPARTED',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 20, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' }
    },
    {
      id: 6,
      destination: 'Roche Harbour',
      connection: false,
      standalone: true,
      status: 'DELAYED',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 150, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' }
    },
  ];
  constructor() { }

  ngOnInit() {
    this.islandOtions = this.islandOtions.sort((a, b) => a.destination.localeCompare(b.destination));
  }

}
