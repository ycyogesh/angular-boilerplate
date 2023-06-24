import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';
import { AppService } from '../app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginData } from '../utils/interface-classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;

  constructor(private fb : FormBuilder, private router : Router, private helper : HelperService, private appService : AppService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email : [null, [Validators.required]],
      password : [null, [Validators.required]]
    });
  }

  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.helper.showToast('warn', 'Please fill all the required fields');
      return;
    }
    this.appService.login(this.loginForm.value).subscribe({
      next : (res : any) => {
        console.log(res);
        if(res) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('sessionid', res.data.sessionid);
          this.router.navigate(['home']);
          this.loginForm.reset();
          this.helper.showToast('success', res.message);
        }
      },
      error : (err : HttpErrorResponse) => {
        console.error(err);
        this.helper.showToast('error',err.error.message);
      }
    });
    
  }

  forgotPassword() {
    console.log("Clicked on forgot password");
    // this.router.navigate(['forgot-password']);
  }
}
