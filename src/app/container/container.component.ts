import { Component, OnInit, Input } from '@angular/core';
import {SidebarTab} from '../sidebar-tab';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  tabs:SidebarTab[] = [{
    name: "Assets",
    icon: "folder"
  }]
  
  constructor() {   }

  ngOnInit() {
  }

}