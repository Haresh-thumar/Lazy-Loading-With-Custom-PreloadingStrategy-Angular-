import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';




@Injectable()

export class CustomOreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // if (route.data && route.data['preload']) {
    //   console.log('Preload Path is :' + route.path);
    //   return load();
    // }
    // else {
    //   return of(null);
    // }

    //--------- shorthand ---------
    return route.data && route.data['preload'] === console.log('Preload Path is :' + route.path) === false ? of(null) : load();
  }

}
