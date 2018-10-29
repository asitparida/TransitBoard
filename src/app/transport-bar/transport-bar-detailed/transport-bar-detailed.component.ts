import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transport-bar-detailed',
  templateUrl: './transport-bar-detailed.component.html',
  styleUrls: ['./transport-bar-detailed.component.scss']
})
export class TransportBarDetailedComponent implements OnInit {
  @Input() island;
  width = 33;

  constructor() { }

  ngOnInit() {
    if (this.island && this.island.attractions.length > 0) {
      this.width = (100 / this.island.attractions.length);
      this.width = Math.floor(this.width);
    }
  }
}
