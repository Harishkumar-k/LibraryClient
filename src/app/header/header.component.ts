import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';
import { Router } from '@angular/router';
import { login } from '../login/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Email : string;
  user : login = new login();

  constructor(
    private LoginService:loginService,
    private router : Router) {
      this.LoginService.currentUser.subscribe(x => 
        {this.user = x
          }
        );
        if(this.user)
        {
          this.Email=this.user.user_Name;
        }
    }

  logout() {
    this.LoginService.logout();
    // this.isAuth = false;
    this.router.navigate(['/Sign In']);
  }

  ngOnInit(): void {
    // if(this.user)
    //   {
    //     this.Email=this.LoginService.currentUserValue.username;
    //   }
  }

}
