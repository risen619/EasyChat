import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

@Injectable()
export class AuthProvider
{
    public homePage: any;
    public loginPage: any;

    constructor(public app: App)
    { }

    public get token() { return localStorage.getItem('token'); }
    public set token(token: string)
    {
        if(token == "")
            localStorage.removeItem('token');
        else
            localStorage.setItem('token', token);
    }

    public isAuthenticated() : boolean { return this.token != undefined; }
    public login(token: string) { this.token = token; }
    public logout()
    {
        this.token = "";
        this.app.getActiveNavs()[0].setRoot(this.loginPage);
    }
}
