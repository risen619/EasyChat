import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/conversation';

@IonicPage()
@Component({
  selector: 'page-active-conversation',
  templateUrl: 'active-conversation.html',
})
export class ActiveConversationPage {

    title: string;
    c: Conversation;

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        this.c = navParams.get("conversation");
        this.title = this.c.name;
    }

}
