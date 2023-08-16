import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';
import { HomeComponent } from './home/home.component';
import { HttpInterceptors } from './auth/http.interceptor';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#071765',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 50,
  blur: 0,
  fgsType: SPINNER.threeStrings,
  hasProgressBar:false,
  overlayColor: "rgba(40,40,40,0.21)",
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorMessageComponent,
    AlertDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [
    MessageService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpInterceptors,
      multi : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
