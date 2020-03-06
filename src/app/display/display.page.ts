import { Component, OnInit } from '@angular/core';
import {qrJson} from '../home/home.page';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  Address: string;
  Balance: string; // おそらくqrJson.~~.~~って形になる
  constructor() { }

  ionViewDidEnter() {
   this.Address = qrJson.data.address;
   this.Balance = qrJson.data.Balance;
  }

  ngOnInit() {
  }

}
