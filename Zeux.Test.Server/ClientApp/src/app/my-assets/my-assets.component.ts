import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Asset, AssetType } from '../type/asset.type';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})

export class MyAssetsComponent implements OnInit {

  private assetTypes: Array<AssetType>;
  private assets: Array<Asset>;

  constructor(private route: ActivatedRoute,
    private router: Router
  ) { }
    
  async ngOnInit() {
    this.assetTypes = this.route.snapshot.data.assetTypes;
    this.reloadAssets();
      
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.reloadAssets();
    }});
  }

  reloadAssets() {
    this.assets = undefined;

    let typeParam = this.route.snapshot.params.type;
    if (typeParam.toLowerCase() === "all") {
      this.assets = this.route.snapshot.data.assets;
      return;
    }

    let type = this.assetTypes.find(assetType => assetType.name.toLowerCase() === typeParam.toLowerCase());

    if (type) {
      this.assets = this.route.snapshot.data.assets.filter(asset => 
        asset.type.id === type.id
      );
      return;
    }
  }
}


