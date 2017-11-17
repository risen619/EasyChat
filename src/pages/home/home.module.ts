import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [HomePage],
    imports: [ComponentsModule, IonicModule],
    entryComponents: [HomePage],
	exports: []
})
export class HomeModule {}