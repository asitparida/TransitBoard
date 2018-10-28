import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-transport-bar-item',
  templateUrl: './transport-bar-item.component.html',
  styleUrls: ['./transport-bar-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarItemComponent implements OnInit {

  @Input() island;
  highlighted = false;
  somethingHighlighted = false;
  @ViewChild('status') status: ElementRef;
  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.islandHighlighted$.subscribe(data => {
      if (data) {
        this.somethingHighlighted = this.island.id !== data;
        if (this.island.id === data) {
          this.highlighted = true;
        } else {
          this.highlighted = false;
        }
      } else {
        this.highlighted = false;
        this.somethingHighlighted = false;
      }
    });

    // if (this.island.id === 1) {
    //   setTimeout(() => {
    //     this.onStatusChange('ONTIME');
    //     setTimeout(() => {
    //       this.onStatusChange('BOARDING');
    //       setTimeout(() => {
    //         this.onStatusChange('DEPARTED');
    //       }, 15000);
    //     }, 10000);
    //   }, 5000);
    // }
    // if (this.island.id === 3) {
    //   setTimeout(() => {
    //     this.onStatusChange('BOARDING');
    //     setTimeout(() => {
    //       this.onStatusChange('DEPARTED');
    //     }, 10000);
    //   }, 7500);
    // }
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
