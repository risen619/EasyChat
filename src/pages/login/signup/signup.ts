import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../classes/password-validator';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

    signupForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        public fb: FormBuilder)
    {
        this.menuCtrl.enable(false);
        this.createForm();
    }

    createForm()
    {
        this.signupForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.email
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(14)
            ])],
            passwordConfirmation: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(14)
            ])]
        }, {
            validator: PasswordValidator.MatchPassword
        });
    }

    submit()
    {
        if(this.signupForm.valid)
        {
            console.log("<Form> Consider me submitted!");
            this.navCtrl.popToRoot();
        }
        else
            console.log("<Form> Nooooooooooo! I'm invalid");
    }

}
