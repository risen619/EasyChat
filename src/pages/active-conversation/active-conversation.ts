import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/conversation';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-active-conversation',
  templateUrl: 'active-conversation.html',
})
export class ActiveConversationPage {

    title: string;
    avatar: string;
    c: Conversation;
    messages: Array<{text: string, mine: boolean}> = [];

    textForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder)
    {
        this.c = navParams.get("conversation");
        this.title = this.c.name;
        this.avatar = this.c.avatarUrl;

        this.createForm();
    }

    get text(): FormControl { return this.textForm.get('text'); }

    createForm()
    {
        this.textForm = this.fb.group({
            text: ['', Validators.required]
        });
    }

    submit()
    {
        if(this.text.valid)
        {
            this.messages.push({text: this.text.value, mine: true});
            this.text.value = "";
        }
    }

}
