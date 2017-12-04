import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-card',
  templateUrl: 'contact-card.html'
})
export class ContactCardComponent
{
    @Input("avatar") avatar: string;
    @Input("header") header: string;
    @Input("subheader") subheader: string;

    @Output("onClick") onClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    click()
    {
        this.onClick.emit();
    }

}
