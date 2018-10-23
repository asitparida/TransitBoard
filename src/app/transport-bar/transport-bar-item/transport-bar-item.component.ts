import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transport-bar-item',
  templateUrl: './transport-bar-item.component.html',
  styleUrls: ['./transport-bar-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarItemComponent implements OnInit {

  @Input() island;
  @ViewChild('status') status: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onStatusChange(status) {
    const statusElem = this.status.nativeElement;
    setTimeout(() => {
      (statusElem as HTMLElement).classList.remove('expand');
      (statusElem as HTMLElement).classList.add('collapse');
      setTimeout(() => {
        this.island.status = status;
        setTimeout(() => {
          (statusElem as HTMLElement).classList.remove('collapse');
          (statusElem as HTMLElement).classList.add('expand');
        });
      }, 250);
    });
  }

}