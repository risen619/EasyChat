import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-conversation',
  templateUrl: 'create-conversation.html',
})
export class CreateConversationPage {

    @ViewChild(Slides) slides: Slides;
    people = [
        {label: 'Shepard', value: false},
        {label: 'Jack', value: false},
        {label: 'Tali Zorah vas Normandy', value: false},
        {label: 'Garrus', value: false},
        {label: 'Joker', value: false},
        {label: 'EDI', value: false}
    ];
    picked = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController)
    { }

    nextPager()
    {
        this.slides.slideNext();
    }

    pickPerson(person)
    {
        person.value = !person.value;
    }

    submit()
    {
        console.log('Hey there :)');
    }

    cancelHandler()
    {
        this.viewCtrl.dismiss();
    }

}
