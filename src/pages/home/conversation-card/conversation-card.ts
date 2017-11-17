import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Conversation } from '../../../models/conversation';
import { ActiveConversationPage } from '../../active-conversation/active-conversation';

@Component({
  selector: 'conversation-card',
  templateUrl: 'conversation-card.html'
})

export class ConversationCardComponent
{
    @Input('conversation') c: Conversation;

    constructor(public nav: NavController) { }

    openConversation()
    {
        this.nav.push(ActiveConversationPage, {"conversation": this.c});
    }
}
