import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
import { ActiveConversationModule } from '../active-conversation/active-conversation.module';
import { ActiveConversationPage } from '../active-conversation/active-conversation';
import { CreateConversationPage } from './create-conversation/create-conversation';

@NgModule({
	declarations: [
        HomePage,
        CreateConversationPage
    ],
    imports: [
        ComponentsModule,
        ActiveConversationModule,
        IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
        HomePage,
        ActiveConversationPage,
        CreateConversationPage
    ],
	exports: []
})
export class HomeModule {}