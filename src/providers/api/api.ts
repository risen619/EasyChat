import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

    public endpoint: string = "http://localhost:8000";

    constructor(public http: HttpClient)
    { }

    public get(url: string) : Observable<any>
    {
        return this.http.get(this.endpoint + `/api/${url}`);
    }

    public post(url: string, body: any) : Observable<any>
    {
        return this.http.post(this.endpoint + `/api/${url}`, body);
    }

}
