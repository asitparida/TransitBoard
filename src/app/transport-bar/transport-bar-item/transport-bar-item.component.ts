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
  direction = '';
  somethingHighlighted = false;
  @ViewChild('status') status: ElementRef;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.direction$.subscribe((dir) => {
      this.direction = dir;
    });
    this.appService.islandHighlighted$.subscribe(data => {
      if (data) {
        this.somethingHighlighted = true;
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
