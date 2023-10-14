import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private apiService : ApiBaseService) { }

  appSettings : string = environment.appUrl;

  get(endpoint:string){
    return this.apiService.Get(`${this.appSettings}`+endpoint);
  }

  post(endpoint:string,body?:any){
    return this.apiService.Post(`${this.appSettings}`+endpoint,body);
  }

  put(endpoint:string,body?:any){
    return this.apiService.Put(`${this.appSettings}`+endpoint,body);
  }

  delete(endpoint:string){
    return this.apiService.Delete(`${this.appSettings}`+endpoint,null);
  }
}
