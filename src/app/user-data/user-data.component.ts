import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { register } from '../register/register';
import { userdata } from './user-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  Email: any;
  validEmail: boolean;
  isLoading : boolean;
  disabled : boolean = true;
  Userdata : userdata = new userdata();
  UserdataForm : FormGroup;
  // register:register = new register();
  constructor(
    private LoginService : loginService,
    private toastr: ToastrService) {
      this.Userdata.user_Name=this.LoginService.currentUserValue.user_Name;
      this.Userdata.email=this.LoginService.currentUserValue.email;
      this.Userdata.password=this.LoginService.currentUserValue.password;
      this.Userdata.mobile_Number=this.LoginService.currentUserValue.mobile_Number;
     }
  
  onClick(){
    if(this.disabled==false)
    {
      this.Userdata.user_ID=this.LoginService.currentUserValue.user_ID;
      this.LoginService.UpdateUserDetails(this.Userdata).subscribe(
        Result => {
          if(Result=="UserData Updated")
          {
            this.toastr.success("User Data Updated","Success");
            this.disabled=!this.disabled;
          }
          else{
            this.toastr.error("Unable to update the User Data","Error");
            this.disabled=!this.disabled;
          }
        }
      )
    }
    else
    {
      this.disabled=!this.disabled;
    }
    
    
  }


  ngOnInit(): void {
  }
  onChangeEmail(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }
  }

}
