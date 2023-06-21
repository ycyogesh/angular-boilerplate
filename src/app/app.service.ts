import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginData } from './utils/interface-classes';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient : HttpClient) { }

  login(data : any) {
    return this.httpClient.post<ILoginData>(environment.appUrl+'registration/login', data);
  }
}
