import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    islandHighlighted = new Subject();
    islandHighlighted$ = this.islandHighlighted.asObservable();
    constructor() {}
    highlightIsland(island) {
        this.islandHighlighted.next(island);
    }
}
