import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {qrJson} from '../home/home.page';
import { AppService } from '../app.service';

import { NetworkType, HashTypeLengthValidator, Password } from 'nem2-sdk';
import { MnemonicQR } from 'nem2-qr-library';
import { ExtendedKey, Network, Wallet, MnemonicPassPhrase } from 'nem2-hd-wallets';
import { ExportMnemonicDataSchema } from 'nem2-qr-library';
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
 password: string;
  constructor(public router: Router, public appservice: AppService,) { }

  ngOnInit() {
  }

  onLogin(loginForm){
    // homepage.tsからqrJsonを取得したい。
    // qrからパスワードだけ抜けとれる？↓
    // const result = ExportMnemonicDataSchema.parse(this.appservice.qrJson, this.password);
    // const mnemonic = result.mnemonic;
    // const bip32seed = mnemonic.toEntropy();
    // console.log(bip32seed.toString());
    // const key = ExtendedKey.createFromSeed(bip32seed, Network.CATAPULT_PUBLIC);
    // const wallet = new Wallet(key);
    // const defaultAccount = wallet.getChildAccount('m/44\'/43\'/0\'/0\'/0\'', NetworkType.TEST_NET);
    // console.log(defaultAccount.privateKey);
    // console.log(defaultAccount.address.pretty());
    // const mnemonic = MnemonicPassPhrase.createRandom();
    // const password = new Password(this.password);
    if (this.password === this.appservice.qrJson.password) {
      this.router.navigateByUrl('/display');
    }
  }

}
