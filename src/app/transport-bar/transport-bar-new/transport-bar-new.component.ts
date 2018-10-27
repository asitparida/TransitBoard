import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transport-bar-new',
  templateUrl: './transport-bar-new.component.html',
  styleUrls: ['./transport-bar-new.component.scss']
})
export class TransportBarNewComponent implements OnInit {
  @Input() island;

  constructor() { }

  ngOnInit() {
  }

}
