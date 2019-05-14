import { Concerto } from './../../model/concerto';
import { ConcertiService } from './../../services/concerti.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-concerti',
  templateUrl: './concerti.component.html',
  styleUrls: ['./concerti.component.css']
})

export class ConcertiComponent implements OnInit {

  listaConcerti: Concerto[];

  constructor(private concertiService: ConcertiService) {
    console.log('costructor run...');
    this.listaConcerti = [];
  }

  /* tslint:disable */
  ngOnInit() {
    this.concertiService.getConcerti().subscribe(res => {
      this.listaConcerti = res;
    }, error => {
      console.log('AppComponent Error', error);
    })
    // let data = this.concertiService.getConcerti();
  }
}


