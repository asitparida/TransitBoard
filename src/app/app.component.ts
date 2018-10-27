import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare let mapboxgl: any;
declare let turf: any;
// tslint:disable max-line-length
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'san-juan';
  ngAfterViewInit() {
    // this.addMap();
  }

  addMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNpdHBhcmlkYSIsImEiOiJjajJhMzl6OHowMDEzMzJwaTVrdWphY2V4In0.vNu71gEwtnCUsEK671XM0w';
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNpdHBhcmlkYSIsImEiOiJjajJhMzl6OHowMDEzMzJwaTVrdWphY2V4In0.vNu71gEwtnCUsEK671XM0w';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/asitparida/cjnjrf76471us2snz4fpyrxy3',
      center: [-123.039808, 48.583000],
      zoom: 9.80,
      interactive: false
    });
    this.addAtlantisHub(map);
    this.addHarbours(map);
    this.addLine(map);
  }

  addLine(map) {
    map.on('load', () => {
      AirportRoutes.forEach((route, i) => {
        const line = turf.linestring([...route]);
        const curved = turf.bezier(line);
        map.addLayer({
          'id': `route_${i}`,
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': curved
          },
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#71e9d0',
            'line-width': 1,
            'line-dasharray': [2, 2]
          }
        });
      });
    });
  }

  addAtlantisHub(map) {
    AtlantisHubStore.features.forEach(function (marker) {
      const markerContent =
        `<div class='img'></div><label>${marker.properties.name}</label>
    `;
      const el = document.createElement('div');
      el.className = 'marker hub';
      el.innerHTML = markerContent;
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
    map.on('load', function (e) {
      map.addSource('atlantis-hub', {
        type: 'geojson',
        data: AtlantisHubStore
      });
    });
  }
  addHarbours(map) {
    Harbours.features.forEach(function (marker) {
      const markerContent =
        `<div class='img-holder'><span class='flight'></span><span class='boat'></span><span class='train'></span></div><label>${marker.properties.name}</label>
    `;
      const el = document.createElement('div');
      el.className = 'marker harbour';
      el.innerHTML = markerContent;
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
    map.on('load', function (e) {
      map.addSource('atlantis-hub-harbours', {
        type: 'geojson',
        data: Harbours
      });
    });
  }
}

const AtlantisHubStore = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -123.050029,
          48.472355
        ]
      },
      'properties': {
        'name': 'Atlantis Hub',
        'phone': '2022347336',
        'address': '1471 P St NW',
        'city': 'Washington DC',
        'country': 'United States',
        'crossStreet': 'at 15th St NW',
        'postalCode': '20005',
        'state': 'D.C.'
      }
    }
  ]
};

const Harbours = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -123.017991,
          48.534106
        ]
      },
      'properties': {
        'name': 'Friday Harbour',
        'train': true,
        'flight': true,
        'boat': true
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -123.147511,
          48.609934
        ]
      },
      'properties': {
        'name': 'Roche Harbour',
        'train': true,
        'flight': true,
        'boat': true
      }
    }
  ]
};

const Atlantis = [-123.050029, 48.472355];
const FridayHarbour = [-123.017991, 48.534106];
const RocheHarbour = [-123.147511, 48.609934];
const OrcasIslandAirport = [-122.910443, 48.709567];
const StuartIslandAirport = [-123.175927, 48.673464];

const AirportRoutes = [
  [Atlantis, [-123.030029, 48.504106], FridayHarbour],
  [Atlantis, [-123.130029, 48.539934], RocheHarbour],
  [Atlantis, [-123.000000, 48.639567], OrcasIslandAirport],
  [Atlantis, [-123.105927, 48.633464], StuartIslandAirport]
];
