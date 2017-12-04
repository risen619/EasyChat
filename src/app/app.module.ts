import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import { TokenInterceptor } from '../providers/token-interceptor/token-interceptor';
import { ApiProvider } from '../providers/api/api';
import { ContactsPageModule } from '../pages/contacts/contacts.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    LoginPageModule,
    ContactsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
        provide: ErrorHandler,
        useClass: IonicErrorHandler
    },
    AuthProvider,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
    ApiProvider
  ]
})
export class AppModule {}
