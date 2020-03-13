import { Component, OnInit } from '@angular/core';
// import {qrJson} from '../home/home.page';
import {AppService} from '../app.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  Address: string;
  Balance: string; // おそらくqrJson.~~.~~って形になる
  constructor(private appservice: AppService) { }

  ionViewDidEnter() {
   this.Address = this.appservice.qrJson.data.address;
   this.Balance = this.appservice.qrJson.data.Balance;
  }

  ngOnInit() {
  }

}
