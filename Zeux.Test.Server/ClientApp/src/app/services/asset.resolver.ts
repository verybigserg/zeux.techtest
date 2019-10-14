import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { AssetService } from './asset.service';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetResolver implements Resolve<any> {
  constructor(private assetService: AssetService) { }
  
  public cacheData: any = undefined;

  resolve() {
    if (this.cacheData) return this.cacheData;

    return this.assetService.getAllAssets().pipe(
      tap((data) => this.cacheData = data),
      map((data) => data),
      catchError((err) => Observable.throw(err.json().error))
    );
  }
}
