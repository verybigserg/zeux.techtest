import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Asset, AssetType } from './type/asset.type';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllAssets() {
    const uriAsset = '/api/asset/Get/all';
    return this.http.get<Array<Asset>>(uriAsset, this.httpOptions);
  }
  
  getAssetTypes() {
    const uriAssetTypes = '/api/asset/GetTypes';
    return this.http.get<Array<AssetType>>(uriAssetTypes, this.httpOptions);
  }
}
