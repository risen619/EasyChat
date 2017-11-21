import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Conversation } from '../../models/conversation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    avatar: string = "assets/imgs/avatar";
    sender: string = "Ionic";
    text: string = "That was a quick start.";

    conversations: Conversation[] = [];

    constructor(public navCtrl: NavController)
    {
        for(let i=1; i<=8; i++)
            this.conversations.push(new Conversation(1, 1, this.sender, this.sender, this.text, this.avatar + i + ".png"));
    }

}
