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
      status: 'BOARDING',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Roche Harbour', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ],
      options: [
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 2,
      destination: 'Stuart Island',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 120, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Orcas Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'Platform B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 3,
      destination: 'Lopez Island',
      connection: true,
      status: 'BOARDING',
      modes: [
        { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
        { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Friday Harbour', departureTime: new Date(), arrivalAt: 'Stuart Harbour', arrivalTime: new Date(), meta: 'Dock A' },
      ],
      options: [
        { mode: 'train', code : 'AC8331', gate: 'Platform B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 4,
      destination: 'Shaw Island',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'flight', modeIcon: 'airplanemode_active', position: 50, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Lopez Harbour', arrivalTime: new Date(), meta: 'Gate 1', id: 'Spirit - SP101' },
      options: [
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 5,
      destination: 'Friday Harbour',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 20, status: 'DEPARTED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'Platform B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    },
    {
      id: 6,
      destination: 'Roche Harbour',
      connection: false,
      standalone: true,
      status: 'BOARDING',
      standaloneMode: { mode: 'train', modeIcon: 'airplanemode_active', position: 150, status: 'DELAYED', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Roche Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
      options: [
        { mode: 'train', code : 'AC8331', gate: 'Platform B', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'BOARDING' },
        { mode: 'flight', code : 'AC8331', gate: 'Gate B1', time: new Date(), status: 'DELAYED' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
