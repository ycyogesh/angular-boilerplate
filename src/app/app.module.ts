import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';
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
    LoginComponent
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
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
