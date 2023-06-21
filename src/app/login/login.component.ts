import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;

  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email : [null, []],
      password : [null, []]
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  forgotPassword() {
    console.log("Clicked on forgot password");
    // this.router.navigate(['forgot-password']);
  }
}
