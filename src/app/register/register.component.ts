import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';
import { register } from './register';
import { Router, ActivatedRoute } from '@angular/router';
import { strict } from 'assert';
import { error } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  register:register = new register();
  validEmail: boolean;
  RegisterForm: FormGroup;
  submitted: boolean = false;
  returnUrl: any;
  error: any;

  constructor(
    private loginservice : loginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  get f() { return this.RegisterForm.controls; }

  OnSignIn(){
    this.submitted = true;
    if (this.RegisterForm.invalid) 
    {
      return;
    }
    this.loginservice.AddUser(this.register)
    .subscribe(
      res => 
      {
        if(res=="Row inserted")
        {
          this.showSuccess();
          setTimeout(() => 
          {
            this.router.navigateByUrl('/Sign In');
          },
          2000);
        }
        else{
          this.error = "User Already Exist"
          this.showError(this.error);
        }
        
      },error =>{
        this.error = error;
        this.showError(error);
      });
  }

  showSuccess() {
    this.toastr.success('Registration Completed!', 'Success!', {
      progressAnimation : "increasing",
      timeOut: 2000,
      tapToDismiss : true,
      progressBar : true
    });
  }

  showError(error : string) {
    this.toastr.error(error, 'Error', {
      progressAnimation : "increasing",
      timeOut: 2000,
      tapToDismiss : true,
      progressBar : true
    });
    }

  onChangeEmail(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }
  }
  
  ngOnInit(): void {

    this.RegisterForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      Email : ['', Validators.required],
      Mobile_Number:['', Validators.required]
  });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Sign Up';

  }

}
