import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    avatar: string = "assets/imgs/avatar";
    sender: string = "Ionic";
    text: string = "That was a quick start.";

    conversations: Array<{avatar: string, sender: string, text: string}> = [];

    constructor(public navCtrl: NavController)
    {
        for(let i=1; i<=8; i++)
            this.conversations.push({
                avatar: this.avatar + i.toString() + ".png",
                sender: this.sender,
                text: this.text
            });
    }

}
