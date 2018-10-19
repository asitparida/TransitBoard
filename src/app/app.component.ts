import { Component, AfterViewInit } from '@angular/core';
declare var mapboxgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'san-juan';
  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNpdHBhcmlkYSIsImEiOiJjajJhMzl6OHowMDEzMzJwaTVrdWphY2V4In0.vNu71gEwtnCUsEK671XM0w';
    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/bright-v9', // stylesheet location
      center: [-123.039808, 48.57], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });
  }
}
