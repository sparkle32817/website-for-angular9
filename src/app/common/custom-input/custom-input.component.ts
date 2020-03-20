import { Component, ViewEncapsulation, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'CustomInput',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent implements OnInit {

  @Input() label: String;
  @Input() type: String;
  @Input() placeholder: String;
  @Input() closable: boolean;
  // @Input() controlName: String;

  value = '';

  formControl = new FormControl('', [Validators.required]);

  isFocused = false;

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    // console.log('controlName::', this.controlName);
    if (this.type === 'email') {
      this.formControl = new FormControl('', [Validators.required, Validators.email]);
    }
  }

  onBlur() {
    this.isFocused = true;
  }

  getErrorStatus(formControl) {
    return (this.isFocused && formControl.hasError('required')) || (formControl.hasError('email') && !formControl.hasError('required'))
  }

}
