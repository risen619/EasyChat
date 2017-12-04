import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular/module';
import { ContactCardComponent } from './contact-card/contact-card';

@NgModule({
	declarations: [
        HeaderComponent,
        ContactCardComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        HeaderComponent,
        ContactCardComponent
    ]
})
export class ComponentsModule {}
