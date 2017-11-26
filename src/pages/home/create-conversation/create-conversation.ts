import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-conversation',
  templateUrl: 'create-conversation.html',
})
export class CreateConversationPage {

    newConversationForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public fb: FormBuilder)
    {
        this.createForm();
    }

    createForm()
    {
        this.newConversationForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            avatar: ''
        });
    }

    submit()
    {
        if(this.newConversationForm.valid)
            console.log("<Form> Consider me submitted!");
        else console.log("<Form> Noooooooooo! I'm invalid");
    }

    cancelHandler()
    {
        this.viewCtrl.dismiss();
    }

}
