import { Component, OnInit } from '@angular/core';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-grouppo',
  templateUrl: './grouppo.component.html',
  // providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styleUrls: ['./grouppo.component.css']
})

export class GrouppoComponent implements OnInit {

  // location: PlatformLocation;
  constructor(location: PlatformLocation) {
    // console.log(location);
    // this.location = location;
    // this.location.onPopState(() => {
    //   if (this.location.pathname !== '/gruppo') {
    //     console.log(this.location.pathname);
    //     console.log(this.location);
    //     console.log('pressed back!');
    //   }
    // });
  }

  ngOnInit() {
  }
}
