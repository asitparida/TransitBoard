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
  harbourOptions = [
    {
      destination: 'Friday Harbour', items: [
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'DELAYED' },
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
      ]
    },
    {
      destination: 'Roche Harbour', items: [
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
      ]
    }];
  islandOtions = [
    {
      destination: 'Orcas Island',
      connection: true,
      status: 'ONTIME',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Roche Harbour', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ]
    },
    {
      destination: 'Orcas Island',
      connection: false,
      standalone: true,
      status: 'DELAYED',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' }
    },
    {
      destination: 'Stuart Island',
      connection: true,
      status: 'ONTIME',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Friday Harbour', departureTime: new Date(), arrivalAt: 'Stuart Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ]
    },
    {
      destination: 'Orcas Island',
      connection: false,
      standalone: true,
      status: 'ONTIME',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', status: 'ONTIME', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' }
    },
    {
      destination: 'Friday Harbour',
      connection: false,
      standalone: true,
      status: 'ONTIME',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', status: 'ONTIME', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' }
    },
    {
      destination: 'Roche Harbour',
      connection: false,
      standalone: true,
      status: 'ONTIME',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' }
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
