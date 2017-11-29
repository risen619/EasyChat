import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ApiProvider } from '../../providers/api/api';
import { SignupPage } from './signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage
{

    formSubmitted = false;
    signinForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public auth: AuthProvider,
        public menuCtrl: MenuController,
        public api: ApiProvider,
        public fb: FormBuilder)
    {
        this.menuCtrl.enable(false);
        this.createForm();
    }

    createForm()
    {
        this.signinForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.email
            ])],
            password: ['', Validators.required]
        });
    }

    get email()
    {
        return this.signinForm.get("email");
    }

    get password()
    {
        return this.signinForm.get("password");
    }


    login()
    {
        this.formSubmitted = true;

        if(this.signinForm.valid)
        {
            this.auth.login("88005553535");
            this.navCtrl.setRoot(HomePage);
            this.menuCtrl.enable(true);
        }
    }

    signup()
    {
        this.navCtrl.push(SignupPage);
    }

}
