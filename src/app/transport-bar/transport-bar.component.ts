import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-bar',
  templateUrl: './transport-bar.component.html',
  styleUrls: ['./transport-bar.component.scss']
})
export class TransportBarComponent implements OnInit {
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
      destination: 'Stuart Island', items: [
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'To Friday Harbour', status: 'ONTIME' },
        { mode: 'boat', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
      ]
    },
    {
      destination: 'Shaw Island', items: [
        { mode: 'train', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
        { mode: 'boat', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
      ]
    },
    {
      destination: 'Orcas Island', items: [
        { mode: 'flight', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
        { mode: 'flight', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
      ]
    },
    // {
    //   destination: 'Lopez Island', items: [
    //     { mode: 'flight', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' },
    //     { mode: 'flight', depTime: new Date(), gate: 'A', id: 'AAXXX', status: 'ONTIME' }
    //   ]
    // },
  ];
  constructor() { }

  ngOnInit() {
  }

}
