import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formTitle = 'Formulaire de connexion';
  datas: any;

  /**partie user*/
  userForm: FormGroup;
  emailControl: FormControl;
  usernameControl: FormControl;
  passwordControl: FormControl;
  routeName: string;

  constructor(
      private http: HttpClient,
      private activRoute: ActivatedRoute,
      public dialogPopup: MatDialog,
      subsCribeForm: FormBuilder
  ) {
    this.usernameControl = subsCribeForm.control('', [Validators.required]);
    this.emailControl = subsCribeForm.control('', [Validators.required, Validators.email]);
    this.passwordControl = subsCribeForm.control('', [Validators.required]);
    this.userForm = subsCribeForm.group({
      usernameCtrl: this.usernameControl,
      passwordCtrl: this.passwordControl
    });
  }

  reset() {
    this.emailControl.setValue('');
    this.usernameControl.setValue('');
    this.passwordControl.setValue('');
  }

  register() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
    // console.log(this.userForm.value);
  }

}