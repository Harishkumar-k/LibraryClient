import { Component, OnInit } from '@angular/core';
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit 
{

  public isLoading: boolean = false;

  constructor(private loading:loginService) 
  { 
    this.loading.isLoading.subscribe
    (
      param => this.isLoading = param
    );
  }

  ngOnInit(): void {}

}
