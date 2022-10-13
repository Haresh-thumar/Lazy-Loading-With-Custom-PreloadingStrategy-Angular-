import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
// import { Observable, timer, of } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';


import { Observable, of, timer } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable()

export class CustomOreloadingStrategyService implements PreloadingStrategy {

  // preload(route: Route, load: () => Observable<any>): Observable<any> {
  //   if (route.data && route.data['preload']) {
  //     console.log('Preload Path is :' + route.path + ', delay' + route.data['delay']);
  //     if (route.data['delay']) {
  //       return timer(5000).pipe(mergeMap(() => load()));
  //     }
  //     return load();
  //   }
  //   else {
  //     return of(null);
  //   }

    //--------- shorthand ---------
    // return route.data && route.data['preload'] === route.data['delay'] === console.log('Preload Path is :' + route.path) === false ? of(null) : load();
    // }
  // }



  preload(route: Route, load: () => any): Observable<any> {
    const loadRoute = (delay: any, time: number | Date) =>
      delay ? timer(time ? time : 1000).pipe(flatMap(_ => load())) : load();
    return route.data && route.data['preload'] ? loadRoute(route.data['delay'], route.data['time']) : of(null);
  }


}
