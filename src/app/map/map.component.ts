import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  count = 0;

  constructor() { }

  ngAfterViewInit() {
    // this.process();
    // let toggle = false;
    // setInterval(() => {
    //   this.count++;
    //   if (this.count === 4) {
    //     this.count = 0;
    //   }
    //   this.process();
    // }, 10000);
  }


  reset() {
    const flightPaths = document.querySelectorAll('.flight-paths path');
    const trainPaths = document.querySelectorAll('.train-paths path');
    const ferryPaths = document.querySelectorAll('.ferry-paths path');
    (flightPaths as any).forEach((path: any) => {
      (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
    });
    (trainPaths as any).forEach((path: any) => {
      (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
    });
    (ferryPaths as any).forEach((path: any) => {
      (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
    });
  }

  process() {
    const flightPaths = document.querySelectorAll('.flight-paths path');
    const trainPaths = document.querySelectorAll('.train-paths path');
    const ferryPaths = document.querySelectorAll('.ferry-paths path');
    (flightPaths as any).forEach((path: any) => {
      (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
    });
    // const flightPaths = document.querySelectorAll('path[data-place="orcas-airport"]');
    // const trainPaths = document.querySelectorAll('path[data-place="friday-harbour"], path[data-place="roche-harbour"]');
    // const ferryPaths = document.querySelectorAll('path[data-place="orcas-harbour"]');
    // console.log(flightPaths);
    // console.log(trainPaths);
    // console.log(trainPaths);
    (flightPaths as any).forEach((path: any) => {
      if (this.count === 1 || true) {
        (path as HTMLElement).style.opacity = '1';
        (path as HTMLElement).setAttribute('stroke', '#f1c40f');
        (path as HTMLElement).classList.add('animate');
      } else {
        (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
      }
    });
    (trainPaths as any).forEach((path: any) => {
      if (this.count === 2  || true) {
        (path as HTMLElement).style.opacity = '1';
        (path as HTMLElement).setAttribute('stroke', '#2ecc71');
        (path as HTMLElement).classList.add('animate');
      } else {
        (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
      }
    });
    (ferryPaths as any).forEach((path: any) => {
      if (this.count === 3  || true) {
        (path as HTMLElement).style.opacity = '1';
        (path as HTMLElement).setAttribute('stroke', '#3498db');
        (path as HTMLElement).classList.add('animate');
      } else {
        (path as HTMLElement).setAttribute('stroke', '#909090');
        (path as HTMLElement).style.opacity = '0.33';
        (path as HTMLElement).classList.remove('animate');
      }
    });
  }

}
