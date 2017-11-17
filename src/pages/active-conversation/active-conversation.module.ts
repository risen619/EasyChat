import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveConversationPage } from './active-conversation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ActiveConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiveConversationPage),
    ComponentsModule
  ],
})
export class ActiveConversationModule {}
