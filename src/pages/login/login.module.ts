import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ComponentsModule } from '../../components/components.module';
import { SignupPage } from './signup/signup';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
      LoginPage,
      SignupPage
  ]
})
export class LoginPageModule {}
