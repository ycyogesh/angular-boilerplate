import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ParamsType } from './api-base-actions.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(public httpClient: HttpClient) {
  }

  Get(url: string, params?: ParamsType) {
    return this.httpClient
      .get(url, {params: this.createParams(params)})
      .pipe(tap((x) => this.HandleResponse(x)));
  }


  GetAll(url: string, params?: ParamsType) {
    return this.httpClient
      .get(url, {params: this.createParams(params)})
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Post(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .post(url, data, {params: this.createParams(params)})
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Delete(url: string, data:any, params?: ParamsType) {
    return this.httpClient
      .delete(url, {params: this.createParams(params)})
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Put(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .put(url, data, {params: this.createParams(params)})
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  HandleResponse(response: any) {
    if (response.Status === 500) {
      // alert(responseMessage.serverError);
      // Need actions toast
    }
  }

  createParams(params?: ParamsType) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.append(key, value);
      });
    }
    return httpParams;
  }}


  // https://medium.com/@zeeshankhan8838/best-practice-to-use-http-service-1f4378145620