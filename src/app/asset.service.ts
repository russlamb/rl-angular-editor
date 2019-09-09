import { Injectable } from '@angular/core';
import {Asset} from './asset';
import {ASSETS} from './mock-assets';

@Injectable()
export class AssetService { 
  getAssets():Asset[] { // return mock data from file
    return this.assets;
  } 
  insertAsset(assetName):void {
    let maxID = Math.max.apply(Math, this.assets.map(function(o) {return o.AssetID}))
    let newAsset = new Asset();
    newAsset.AssetID = maxID+1;
    newAsset.AssetName = assetName;
    newAsset.AssetAbbrev = assetName;
    newAsset.AssetType = "Term Loan";
    this.assets.push(newAsset);
  }
  deleteAsset(asset:Asset):void{
    console.log({"delete asset":asset});
    // get index of item to delete by matching on AssetID
    let indexOfItemToDelete = this.assets.map(e=>e.AssetID).indexOf(asset.AssetID); 
    //remove item
    this.assets.splice(indexOfItemToDelete,1);
  }
  updateAsset(asset:Asset):void{
    console.log({"update asset":asset});
    let indexOfItemToUpdate = this.assets.map(e=>e.AssetID).indexOf(asset.AssetID); 
    // update item
    this.assets.splice(indexOfItemToUpdate,1,asset);
  }
  assets:Asset[];
  constructor() { this.init() }

  init():void {
    this.assets= ASSETS;
  }
}