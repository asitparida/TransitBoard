import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Maps from './data';
import { AppService } from '../app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map2.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnInit {
  count = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.islandHighlighted$.subscribe((data) => {
      this.reset();
      if (data) {
        switch (data) {
          case 'ORCAS' : { this.hide(); this.highlightIsland(Maps.OrcasMap); break; }
          case 'SHAW' : { this.hide(); this.highlightIsland(Maps.ShawMap); break; }
          case 'STUART' : { this.hide(); this.highlightIsland(Maps.StuartMap); break; }
          case 'LOPEZ' : { this.hide(); this.highlightIsland(Maps.LopezMap); break; }
          case 'FRIDAY' : { this.hide(); this.highlightIsland(Maps.FridayMap); break; }
          case 'ROCHE' : { this.hide(); this.highlightIsland(Maps.RocheMap); break; }
          case 'YACHT' : { this.hide(); this.highlightIsland(Maps.YachtMap); break; }
        }
      } else {
        this.normalDisplay();
      }
    });
  }

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
    const legends = document.querySelectorAll('.legend[data-mode]');
    (flightPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (trainPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (ferryPaths as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (points as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (islands as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (islandLabels as any).forEach((path: any) => {
      path.classList.add('reset');
      path.classList.remove('highlight');
      path.classList.remove('hidden');
      path.classList.remove('normal');
    });
    (legends as any).forEach((path: any) => {
      path.classList.remove('mute');
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
      const islands = document.querySelectorAll(islandMap.island);
      if (islands.length > 0) {
        (islands as any).forEach(path => {
          path.classList.remove('reset');
          path.classList.add('highlight');
        });
      }
      const islandLabels = document.querySelectorAll(islandMap.islandLabel);
      if (islandLabels.length > 0) {
        (islandLabels as any).forEach(path => {
          path.classList.remove('reset');
          path.classList.add('highlight');
        });
      }
      let legend = document.querySelector('.legend[data-mode="ferry"]');
      if (!islandMap.ferries || islandMap.ferries.length === 0) {
        if (legend) {
          legend.classList.add('mute');
        }
      } else {
        legend.classList.remove('hidden');
      }
      console.log(legend, !islandMap.ferries || islandMap.ferries.length === 0);
      legend = document.querySelector('.legend[data-mode="train"]');
      if (!islandMap.trains || islandMap.trains.length === 0) {
        if (legend) {
          legend.classList.add('mute');
        }
      } else {
        legend.classList.remove('hidden');
      }
      console.log(legend, !islandMap.trains || islandMap.trains.length === 0);
      legend = document.querySelector('.legend[data-mode="flight"]');
      if (!islandMap.flight || islandMap.flight.length === 0) {
        if (legend) {
          legend.classList.add('mute');
        }
      } else {
        legend.classList.remove('hidden');
      }
      console.log(legend, !islandMap.flight || islandMap.flight.length === 0);
    }
  }
}
