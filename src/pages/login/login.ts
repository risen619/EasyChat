import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public auth: AuthProvider,
        public menuCtrl: MenuController)
    {
        this.menuCtrl.enable(false);
    }

    login()
    {
        this.auth.login("88005553535");
        this.navCtrl.setRoot(HomePage);
        this.menuCtrl.enable(true);
    }

}
