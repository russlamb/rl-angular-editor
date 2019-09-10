import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// angular anumations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// angular materials modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

// ag-grid module
import { AgGridModule } from 'ag-grid-angular';
import { AssetService } from './asset.service';
//my components
import { AssetsComponent } from './assets/assets.component';
import { ContainerComponent } from './container/container.component';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { AccountService } from './account.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule , MatToolbarModule
  , MatSidenavModule
  , MatButtonModule 
  , MatListModule
  , MatInputModule
  , MatIconModule
  , MatDialogModule
  , MatTabsModule
  , AgGridModule.withComponents([])
  ],
  declarations: [ AppComponent, HelloComponent, ContainerComponent, AssetsComponent, AssetDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AssetService, AccountService],
  entryComponents: [
    AssetDialogComponent
  ]
})
export class AppModule { }
