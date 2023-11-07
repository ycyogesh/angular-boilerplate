import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-forms',
  templateUrl: './simple-forms.component.html',
  styleUrls: ['./simple-forms.component.scss']
})
export class SimpleFormsComponent {

  userForm! : FormGroup;
  formValues : any;

  isSubmitted : boolean = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    this.formValueChanges();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]]
    })
  }

  get form() {
    return this.userForm.controls;
  }

  submit() {
    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());
    this.isSubmitted = true;
  }

  formValueChanges() {
    this.userForm.valueChanges.subscribe((res) => {
      this.formValues = res;
      this.isSubmitted = false;
    })
  }

}
