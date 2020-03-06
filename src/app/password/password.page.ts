import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {qrJson} from '../home/home.page'
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
 password: string;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm){
    // homepage.tsからqrJsonを取得したい。
    // qrからパスワードだけ抜けとれる？↓
    if (this.password === qrJson.data.password){
      this.router.navigateByUrl('/display')
    }
  }

}
