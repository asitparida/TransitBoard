import {
  Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-transport-bar-mode',
  templateUrl: './transport-bar-mode.component.html',
  styleUrls: ['./transport-bar-mode.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransportBarModeComponent implements AfterViewInit {

  @Input() mode;
  @Input() status;
  @Output() statusChange = new EventEmitter();
  @ViewChild('flight') flight: ElementRef;
  @ViewChild('line') line: ElementRef;
  @ViewChild('unfilled') unfilled: ElementRef;
  @ViewChild('filled') filled: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    if (this.mode.mode === 'flight') {
      if (this.mode.status === 'DELAYED') {
        this.startAnimation();
      }
    }
  }
  startAnimation() {
    const line = this.line.nativeElement;
    const filled = this.filled.nativeElement;
    const unfilled = this.unfilled.nativeElement;
    const flight = this.flight.nativeElement;
    if (line) {
      (line as HTMLElement).classList.remove('nofill');
    }
    const maxLeft = (filled as HTMLElement).getBoundingClientRect().width;
    let currentPosition = 0;
    const stepper = 0.025;
    if (flight) {
      (flight as HTMLElement).classList.add('approaching');
      const movePlane =  () => {
        const widthInterval = setInterval(() => {
          currentPosition = currentPosition + stepper;
          const filledWidth = (((maxLeft - currentPosition) / maxLeft) * 50);
          const unfilledWidth = 100 - filledWidth;
          (flight as HTMLElement).style.transform = `translateX(${-currentPosition}px) rotate(180deg)`;
          (filled as HTMLElement).style.width = `${filledWidth}%`;
          (unfilled as HTMLElement).style.width = `${unfilledWidth}%`;
          if (currentPosition > maxLeft) {
            (flight as HTMLElement).style.transform = `translateX(${-currentPosition}px) rotate(0deg)`;
            (flight as HTMLElement).classList.remove('approaching');
            currentPosition = 0;
            clearInterval(widthInterval);
            this.changeState('ARRIVED');
            setTimeout(() => {
              this.changeState('BOARDING');
            }, 5000);
          }
        }, 10);
      };
      setTimeout(movePlane);
    }
  }
  changeState(status) {
    this.status = status;
    this.statusChange.emit(this.status);
  }

}
