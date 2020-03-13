import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {
  Account,
  Address,
  AggregateTransaction,
  Deadline,
  HashLockTransaction,
  Listener,
  Mosaic,
  MosaicId,
  NetworkType,
  PlainMessage,
  PublicAccount,
  TransactionService,
  TransferTransaction,
  UInt64,
  TransactionHttp,
  ReceiptHttp,
} from 'nem2-sdk';

@Injectable({
  providedIn: 'root'
})
export class AppService {
text: string;
  constructor(private qrScanner: QRScanner) { }
  // QrJson(){
  //   const scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //     console.log('Scanned something', text);
  //     if (text !== '') {
         qrJson = JSON.parse(this.text);
//         console.log(text);
//         console.log(qrJson.data.msg);
//       }
// }
}
