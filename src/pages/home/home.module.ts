import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { ConversationCardComponent } from './conversation-card/conversation-card';

import { ComponentsModule } from '../../components/components.module';
import { ActiveConversationModule } from '../active-conversation/active-conversation.module';
import { ActiveConversationPage } from '../active-conversation/active-conversation';

@NgModule({
	declarations: [HomePage, ConversationCardComponent],
    imports: [ComponentsModule, ActiveConversationModule, IonicPageModule.forChild(HomePage)],
    entryComponents: [HomePage, ConversationCardComponent, ActiveConversationPage],
	exports: []
})
export class HomeModule {}