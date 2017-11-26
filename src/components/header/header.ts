import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

    @Input('title') pageName: string;
    @Input('avatar') avatar: string;
    @Input('modal') isModal: boolean;
    @Output('cancel') onCancel = new EventEmitter<any>();

    constructor() { }

    cancel()
    {
        this.onCancel.emit();
    }

}
