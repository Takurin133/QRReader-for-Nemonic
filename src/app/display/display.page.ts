import { Component, OnInit } from "@angular/core";
// import {qrJson} from '../home/home.page';
import { AppService } from "../app.service";

import { NetworkType, HashTypeLengthValidator, Password } from "nem2-sdk";
import { MnemonicQR } from "nem2-qr-library";
import {
  ExtendedKey,
  Network,
  Wallet,
  MnemonicPassPhrase
} from "nem2-hd-wallets";
import { ExportMnemonicDataSchema } from "nem2-qr-library";
import {Address, RepositoryFactoryHttp} from 'symbol-sdk';
@Component({
  selector: "app-display",
  templateUrl: "./display.page.html",
  styleUrls: ["./display.page.scss"]
})
export class DisplayPage implements OnInit {
  Address: string;
  Balance: string; // おそらくqrJson.~~.~~って形になる
  constructor(private appservice: AppService) {}

  ionViewDidEnter() {
    const result = this.appservice.qrJson;
    const mnemonic = result.mnemonic;
    const bip32seed = mnemonic.toEntropy();
    console.log(bip32seed.toString());
    const key = ExtendedKey.createFromSeed(bip32seed, Network.CATAPULT_PUBLIC);
    const wallet = new Wallet(key);
    const defaultAccount = wallet.getChildAccount(
      "m/44'/43'/0'/0'/0'",
      NetworkType.TEST_NET
    );
    console.log(defaultAccount.privateKey);
    console.log(defaultAccount.address.pretty());

    this.Address = defaultAccount.address.pretty();

    // replace with recipient address
    const rawAddress = "TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP";
    const address = Address.createFromRawAddress(rawAddress);
    // replace with node endpoint
    const nodeUrl = "http://api-01.us-west-1.symboldev.network:3000";
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
    const accountHttp = repositoryFactory.createAccountRepository();

    accountHttp.getAccountInfo(address).subscribe(
      accountInfo => console.log(accountInfo),　//これ表示させれば解決？
      err => console.error(err)
    );
    // ↑確認できない
    // this.Balance = this.appservice.qrJson.data.Balance; // Accountのnem2-sdkでaddressでブロックチェーンと通信してよび出す（アカウントレポジトリからgetAccountInfoメソッドから）
    //↑ここqrJsonの中身わかんないとわっかんねぇ
  }

  ngOnInit() {}
}
