import { Component, OnInit } from '@angular/core';
import { loginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { first } from 'rxjs/operators';
import { login } from './login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validEmail: boolean;
  Login : login = new login();
  returnUrl: string;
  loginForm: FormGroup;
  submitted :boolean= false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginservice : loginService,
    private router: Router,
    private route: ActivatedRoute) {
      if (this.loginservice.currentUserValue) 
      { 
        this.router.navigate(['/Welcome']);
      }
  }

  get f() { return this.loginForm.controls; }

  signIn():void{
    this.submitted = true;
    if (this.loginForm.invalid && this.validEmail) 
    {
      return;
    }
    this.loginservice.login(this.Login)
    .pipe(first())
    .subscribe(result => {
      this.Login=result;
      if(this.Login.token){
        this.router.navigate([this.returnUrl]);
      }
      else
      {
        this.error="Invalid Username and Password"
        this.loginservice.logout();
      }
    },error =>{
      this.error = error;
    });
  }

  onChange(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.loginForm.invalid;
      this.validEmail = false;
    }
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Welcome';
  }

}
