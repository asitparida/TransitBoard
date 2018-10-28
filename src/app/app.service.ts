import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    islandHighlighted = new Subject();
    islandHighlighted$ = this.islandHighlighted.asObservable();
    direction = new Subject<string>();
    direction$ = this.direction.asObservable();
    constructor() {}
    highlightIsland(island, direction = 'UP') {
        this.direction.next(direction);
        this.islandHighlighted.next(island);
    }
}
