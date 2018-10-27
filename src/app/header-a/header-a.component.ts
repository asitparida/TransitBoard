import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetPartlySunny } from '../weather';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header-a',
  templateUrl: './header-a.component.html',
  styleUrls: ['./header-a.component.scss']
})
export class HeaderAComponent implements OnInit {
  time = new Date();
  currentWeather =  this._sanitizer.bypassSecurityTrustHtml(GetPartlySunny('rgba(255, 255, 255, 0.80)', 80));
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date(this.time.getTime() + 1 * 60000);
    }, 2000);
  }


}
