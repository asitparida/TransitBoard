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
  @Input() standalone = false;
  @Input() status;
  @Output() statusChange = new EventEmitter();
  @ViewChild('flight') flight: ElementRef;
  @ViewChild('train') train: ElementRef;
  @ViewChild('boat') boat: ElementRef;
  @ViewChild('line') line: ElementRef;
  @ViewChild('unfilled') unfilled: ElementRef;
  @ViewChild('filled') filled: ElementRef;
  width50;

  constructor() { }

  ngAfterViewInit() {
    // const line = (this.line.nativeElement as HTMLElement).getBoundingClientRect();
    // this.width50 = line.width / 2;
    // if (this.standalone) {
    //   if (this.mode.status === 'DELAYED') {
    //     this.startAnimationForApproaching();
    //   }
    //   if (this.mode.status === 'DEPARTED') {
    //     this.startAnimationForDeparture();
    //   }
    // }
  }
  getModeTransport() {
    if (this.mode.mode === 'flight') {
      return this.flight.nativeElement;
    }
    if (this.mode.mode === 'train') {
      return this.train.nativeElement;
    }
    if (this.mode.mode === 'boat') {
      return this.boat.nativeElement;
    }
  }
  startAnimationForApproaching() {
    const line = this.line.nativeElement;
    const filled = this.filled.nativeElement;
    const unfilled = this.unfilled.nativeElement;
    const transport = this.getModeTransport();
    if (line) {
      (line as HTMLElement).classList.remove('nofill');
    }
    const width = this.width50;
    const maxLeft = width;
    let currentPosition = -(width * ((100 - (this.mode.position || 100)) / 100));
    const stepper = 0.033;
    if (transport) {
      (transport as HTMLElement).classList.add('approaching');
      (line as HTMLElement).classList.add('approaching');
      const movePlane =  () => {
        const widthInterval = setInterval(() => {
          currentPosition = currentPosition + stepper;
          const filledWidth = (((maxLeft - currentPosition) / maxLeft) * 50);
          const unfilledWidth = 100 - filledWidth;
          (transport as HTMLElement).style.transform = `translateX(${-currentPosition}px) scaleX(-1)`;
          (filled as HTMLElement).style.width = `${filledWidth}%`;
          (unfilled as HTMLElement).style.width = `${unfilledWidth}%`;
          if (currentPosition > maxLeft) {
            (transport as HTMLElement).style.transform = `translateX(${-currentPosition}px) scaleX(1)`;
            (transport as HTMLElement).classList.remove('approaching');
            currentPosition = 0;
            clearInterval(widthInterval);
            this.changeState('ARRIVED');
            setTimeout(() => {
              this.changeState('BOARDING');
              setTimeout(() => {
                this.changeState('DEPARTED');
                this.mode.position = 0;
                this.startAnimationForDeparture();
              }, 10000);
            }, 5000);
          }
        }, 10);
      };
      setTimeout(movePlane);
    }
  }
  startAnimationForDeparture() {
    const line = this.line.nativeElement;
    const filled = this.filled.nativeElement;
    const unfilled = this.unfilled.nativeElement;
    const transport = this.getModeTransport();
    if (line) {
      (line as HTMLElement).classList.remove('nofill');
    }
    const width = this.width50;
    const maxLeft = width;
    let currentPosition = -(width * ((100 - (this.mode.position || 0)) / 100));
    const stepper = 0.020;
    if (transport) {
      (transport as HTMLElement).classList.add('departing');
      (line as HTMLElement).classList.add('departing');
      const movePlane =  () => {
        const widthInterval = setInterval(() => {
          currentPosition = currentPosition + stepper;
          const unfilledWidth = (((maxLeft - currentPosition) / maxLeft) * 50);
          const filledWidth = 100 - unfilledWidth;
          (transport as HTMLElement).style.transform = `translateX(${currentPosition}px)`;
          (filled as HTMLElement).style.width = `${filledWidth}%`;
          (unfilled as HTMLElement).style.width = `${unfilledWidth}%`;
          if (currentPosition > maxLeft) {
            (transport as HTMLElement).style.transform = `translateX(${currentPosition}px)`;
            (transport as HTMLElement).classList.remove('departing');
            currentPosition = 0;
            clearInterval(widthInterval);
            this.changeState('REACHED');
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
