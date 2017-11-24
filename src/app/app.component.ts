import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public auth: AuthProvider)
    {
        this.initializeApp();

        this.auth.loginPage = LoginPage;
        this.auth.homePage = HomePage;

        this.pages = [
            { title: 'Conversations', component: HomePage },
            { title: 'Logout', component: LoginPage }
        ];
    
        if(!this.auth.isAuthenticated())
            this.rootPage = LoginPage;

    }

    initializeApp()
    {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page)
    {

        setTimeout(() => {
            if(page.title == "Logout")
                this.auth.logout();
            else
                this.nav.setRoot(page.component);
        }, 500);
    }

}
