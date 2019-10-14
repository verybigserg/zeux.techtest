import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAssetsComponent } from 'src/app/my-assets/my-assets.component';
import { OpportunitiesComponent } from 'src/app/opportunities/opportunities.component';
import { AssetResolver } from 'src/app/services/asset.resolver';
import { AssetTypeResolver } from 'src/app/services/asset.type.resolver';

const routes: Routes = [
  {
    path: 'myassets/:type',
    component: MyAssetsComponent,
    resolve: {
      assets: AssetResolver,
      assetTypes: AssetTypeResolver
    }
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  },
  {
    path: '**',
    redirectTo: 'myassets/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
