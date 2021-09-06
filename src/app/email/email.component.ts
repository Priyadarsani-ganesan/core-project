import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilService } from '@theaa/core-lib';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  keyMaskType: any;
  testForm : any;

  constructor (public utilService: UtilService,
  private formBuilder: FormBuilder) { 

    this.testForm = new FormBuilder().group({
      emailField: ['', [Validators.required, Validators.pattern(this.utilService.KeyMaskValidatorPatterns.email)], Validators.minLength(5), Validators.maxLength(256)],
    }),
      this.keyMaskType = this.utilService.KeyMaskType;
  }

  onNext() {
    console.log(this.testForm.value)
  }

}

