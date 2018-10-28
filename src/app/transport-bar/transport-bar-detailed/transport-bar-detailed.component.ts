import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transport-bar-detailed',
  templateUrl: './transport-bar-detailed.component.html',
  styleUrls: ['./transport-bar-detailed.component.scss']
})
export class TransportBarDetailedComponent implements OnInit {
  @Input() island;

  constructor() { }

  ngOnInit() {
  }
}
