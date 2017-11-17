import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from './home';
import { ConversationCardComponent } from './conversation-card/conversation-card';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [HomePage, ConversationCardComponent],
    imports: [ComponentsModule, IonicModule],
    entryComponents: [HomePage, ConversationCardComponent],
	exports: []
})
export class HomeModule {}