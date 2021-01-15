import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loginService } from '../login/login.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  Email : string;
  constructor(private route:ActivatedRoute,
    private router : Router,
    private LoginService : loginService,
    config: NgbCarouselConfig) { 
      config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    }
  
  onClickUser(){
    this.router.navigate(['/user']);
  }

  logout() {
    this.LoginService.logout();
    this.router.navigate(['/Sign In']);
  }

  ngOnInit(): void {
    this.Email=this.LoginService.currentUserValue.user_Name
  }

}
