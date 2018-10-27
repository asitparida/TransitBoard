import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Maps from './data';

@Component({
  selector: 'app-map',
  templateUrl: './map2.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  count = 0;

  constructor() { }

  ngAfterViewInit() {
    this.reset();
    this.normalDisplay();
    // this.hide();
    // this.highlightIsland(Maps.OrcasMap);
  }

  normalDisplay() {
    this.reset();
    const points = document.querySelectorAll('[data-point]');
    (points as any).forEach((path: any) => {
      path.classList.add('normal');
      path.classList.remove('reset');
      path.classList.remove('hidden');
    });
    const islandLabels = document.querySelectorAll('[data-island-label]');
    (islandLabels as any).forEach((path: any) => {
      path.classList.add('normal');
      path.classList.remove('reset');
      path.classList.remove('hidden');
    });
    const flightPaths = document.querySelectorAll('[data-mode="flight"]');
    const trainPaths = document.querySelectorAll('[data-mode="train"]');
    const ferryPaths = document.querySelectorAll('[data-mode="ferry"]');
    (flightPaths as any).forEach((path: any) => {
      path.classList.add('normal');
      path.classList.remove('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (trainPaths as any).forEach((path: any) => {
      path.classList.add('normal');
      path.classList.remove('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (ferryPaths as any).forEach((path: any) => {
      path.classList.add('normal');
      path.classList.remove('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
  }


  reset() {
    const flightPaths = document.querySelectorAll('[data-mode="flight"]');
    const trainPaths = document.querySelectorAll('[data-mode="train"]');
    const ferryPaths = document.querySelectorAll('[data-mode="ferry"]');
    const points = document.querySelectorAll('[data-point]');
    const islands = document.querySelectorAll('[data-island]');
    const islandLabels = document.querySelectorAll('[data-island-label]');
    (flightPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (trainPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (ferryPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (points as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (islands as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
    (islandLabels as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
    });
  }

  hide() {
    const flightPaths = document.querySelectorAll('[data-mode="flight"]');
    const trainPaths = document.querySelectorAll('[data-mode="train"]');
    const ferryPaths = document.querySelectorAll('[data-mode="ferry"]');
    const points = document.querySelectorAll('[data-point]');
    (flightPaths as any).forEach((path: any) => {
      path.classList.add('hidden');
    });
    (trainPaths as any).forEach((path: any) => {
      path.classList.add('hidden');
    });
    (ferryPaths as any).forEach((path: any) => {
      path.classList.add('hidden');
    });
    (points as any).forEach((path: any) => {
      path.classList.add('hidden');
    });
  }

  highlightIsland(islandMap) {
    if (islandMap) {
      [
        ...islandMap.ferries || [],
        ...islandMap.trains || [],
        ...islandMap.flight || [],
        ...islandMap.points || []
      ].forEach(pathId => {
        const paths = document.querySelectorAll(pathId);
        if (paths && paths.length > 0) {
          (paths as any).forEach(path => {
            path.classList.add('highlight');
            path.classList.remove('hidden');
          });
        }
      });
      const island = document.querySelector(islandMap.island);
      if (island) {
        island.classList.add('highlight');
      }
      const islandLabel = document.querySelector(islandMap.islandLabel);
      if (islandLabel) {
        islandLabel.classList.remove('reset');
        islandLabel.classList.add('highlight');
      }
    }
  }

  //   process() {
  //     const flightPaths = document.querySelectorAll('.flight-paths path');
  //     const trainPaths = document.querySelectorAll('.train-paths path');
  //     const ferryPaths = document.querySelectorAll('.ferry-paths path');
  //     (flightPaths as any).forEach((path: any) => {
  //       (path as HTMLElement).setAttribute('stroke', '#909090');
  //         (path as HTMLElement).style.opacity = '0.33';
  //         (path as HTMLElement).classList.remove('animate');
  //     });
  //     // const flightPaths = document.querySelectorAll('path[data-place="orcas-airport"]');
  //     // const trainPaths = document.querySelectorAll('path[data-place="friday-harbour"], path[data-place="roche-harbour"]');
  //     // const ferryPaths = document.querySelectorAll('path[data-place="orcas-harbour"]');
  //     // console.log(flightPaths);
  //     // console.log(trainPaths);
  //     // console.log(trainPaths);
  //     (flightPaths as any).forEach((path: any) => {
  //       if (this.count === 1 || true) {
  //         (path as HTMLElement).style.opacity = '1';
  //         (path as HTMLElement).setAttribute('stroke', '#f1c40f');
  //         (path as HTMLElement).classList.add('animate');
  //       } else {
  //         (path as HTMLElement).setAttribute('stroke', '#909090');
  //         (path as HTMLElement).style.opacity = '0.33';
  //         (path as HTMLElement).classList.remove('animate');
  //       }
  //     });
  //     (trainPaths as any).forEach((path: any) => {
  //       if (this.count === 2  || true) {
  //         (path as HTMLElement).style.opacity = '1';
  //         (path as HTMLElement).setAttribute('stroke', '#2ecc71');
  //         (path as HTMLElement).classList.add('animate');
  //       } else {
  //         (path as HTMLElement).setAttribute('stroke', '#909090');
  //         (path as HTMLElement).style.opacity = '0.33';
  //         (path as HTMLElement).classList.remove('animate');
  //       }
  //     });
  //     (ferryPaths as any).forEach((path: any) => {
  //       if (this.count === 3  || true) {
  //         (path as HTMLElement).style.opacity = '1';
  //         (path as HTMLElement).setAttribute('stroke', '#3498db');
  //         (path as HTMLElement).classList.add('animate');
  //       } else {
  //         (path as HTMLElement).setAttribute('stroke', '#909090');
  //         (path as HTMLElement).style.opacity = '0.33';
  //         (path as HTMLElement).classList.remove('animate');
  //       }
  //     });
  //   }

}
