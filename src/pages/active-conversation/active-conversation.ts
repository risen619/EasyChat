import { Component, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
import { Conversation } from '../../models/conversation';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-active-conversation',
  templateUrl: 'active-conversation.html',
})
export class ActiveConversationPage
{
    @ViewChild(Content) content: Content;

    title: string;
    avatar: string;
    c: Conversation;
    messages: Array<{text: string, mine: boolean}> = [];

    textForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder,
        public plt: Platform)
    {
        this.c = navParams.get("conversation");
        this.title = this.c.name;

        if(!(plt.is('ios') || plt.is('ipad') || plt.is('iphone')))
            this.avatar = this.c.avatarUrl;

        this.createForm();
    }

    get text() { return this.textForm.get('text'); }

    createForm()
    {
        this.textForm = this.fb.group({
            text: ['', Validators.required]
        });
    }

    submit()
    {
        this.text.setValue((String)(this.text.value).trim());
        if(this.text.valid)
        {
            this.messages.push({text: this.text.value, mine: (Math.random()*10 >= 5)?(true):(false)});
            this.text.setValue("");
            this.content.scrollTo(0, this.content._scrollContent.nativeElement.scrollHeight);
        }
    }

}
