import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()

export class CustomOreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path is :' + route.path + ', delay' + route.data['delay']);
      if (route.data['delay']) {
        return timer(3000).pipe(mergeMap(() => load()));
      }
      return load();
    }
    else {
      return of(null);
    }

    //--------- shorthand ---------
    // return route.data && route.data['preload'] === route.data['delay'] === console.log('Preload Path is :' + route.path) === false ? of(null) : load();
    // }
  }



}
