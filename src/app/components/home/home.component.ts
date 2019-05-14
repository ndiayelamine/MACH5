import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any;

  constructor() {
    this.items = [
      {src: './assets/img/marco_eli.jpg', titolo: 'Marco Elisa', stato: 'active'},
      {src: './assets/img/elisa.jpg', titolo: 'Elisa', stato: ''},
      {src: './assets/img/palco.jpg', titolo: 'Palco', stato: ''},
      {src: './assets/img/palco2.jpg', titolo: 'Palco', stato: ''},
      {src: './assets/img/marco2.jpg', titolo: 'Marco', stato: ''}
    ];
  }

  ngOnInit() {
  }

}
