import { Component, Input } from '@angular/core';

@Component({
  selector: 'conversation-card',
  templateUrl: 'conversation-card.html'
})

export class ConversationCardComponent
{
    @Input('avatar-url') avatar: string;
    @Input('sender-name') sender: string;
    @Input('last-message') text: string;

    constructor() { }
}
