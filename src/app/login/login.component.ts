import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';
import { AppService } from '../app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginData } from '../utils/interface-classes';
import { DialogService } from 'primeng/dynamicdialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;
  formVisible:boolean =false;

  constructor(private dialogService: DialogService,private fb : FormBuilder, private router : Router, private helper : HelperService, private appService : AppService) { }

  get form(){
    return this.loginForm.controls
  }

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

  cancelForm(){
    if (this.loginForm.touched) {
      this.cancelConfirmation();
      return ;
    }
    this.formVisible=false ;
    this.loginForm.reset();
    
  }
  openDialog(){

  }

  cancelConfirmation() {
    this.dialogService.open(AlertDialogComponent, {
      data: {
        message: 'Are you sure want to cancel ?',
        primaryBtnText: 'Yes',
        secondaryBtnText: 'No'
      },
      header: 'Cancel',
      width: '30%',
      styleClass: 'cust-alert-dialog',
      dismissableMask: true,
      closeOnEscape: false,
      closable: true
    }).onClose.subscribe((res: any) => {
      if (res) {
        this.formVisible = false;
        this.loginForm.reset();
      }
    })
  }
}
